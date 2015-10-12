// # Includes
var Promise     = require('bluebird');
var request     = require('request');
var _           = require('lodash');
var graph       = require('fbgraph');

// # Constants
var FACEBOOK_APP_ID = process.env.KH_FB_APP_ID;
var FACEBOOK_APP_SECRET = process.env.KH_FB_APP_SECRET;
if (!FACEBOOK_APP_ID || !FACEBOOK_APP_SECRET) {
    console.log('FB App Info not set - using Graph API will be challenging');
}


// # State
var state = {
    accessToken: null,
    eventId: null,

    fetched: false,
    eventAttendees: null,
    eventPosts: null
};

// # "Public" functions
var service = {}; // the "service" to be exported

service.initialize = function(eventId) {
    state.eventId = eventId
    _getAccessToken()
    .then(function() {
        // Run _updateEventInfo every 5 mins
        setInterval(_updateEventInfo, 60000 * 5);

        // Execute update immediatelly
        _updateEventInfo();
    });
}

service.getEventInfo = function() {
    return _.pick(state, 'eventAttendees', 'eventPosts');
};





// # Internal functions ------------------------------------------
//


// @pre-req: state.accessToken is fetched
function _updateEventInfo() {
    console.log('Event info update!');

    graph.setAccessToken(state.accessToken);

    Promise.props({
        eventAttendees:     _updateEventAttendees(),
        eventPosts:         _updateEventPostCount()
    })
    .then(function(eventData) {
        console.log('Event Info fetched', eventData);
        _.assign(state, eventData);
    })
    .error(function(error) {
        console.log('Event info could not be updated', error);
    });
}

function _updateEventAttendees() {
    return new Promise(function (resolve, reject) {
        console.log(state.eventId);
        graph.get(state.eventId, { fields: 'attending_count' }, function(err, res) {
            if (err) {
                console.log('error on attendees fetch', err);
                reject(null);
            }
            else {
                resolve(res.attending_count);
            }
        });
    })
}

function _updateEventPostCount() {
    return new Promise(function (resolve, reject) {
        graph.get(state.eventId + '/feed', function(err, res) {
            if (err) {
                console.log('error on event posts fetch', err);
                reject(null);
            }
            else {
                resolve(res.data.length);
            }
        });
    })
}




function _getAccessToken() {
    return new Promise(function(resolve, reject) {
        request.get('https://graph.facebook.com/oauth/access_token?' +
            'client_id=' + FACEBOOK_APP_ID +
            '&client_secret=' + FACEBOOK_APP_SECRET +
            '&grant_type=client_credentials',

            function(error, response, body) {
                if (error) {
                    console.log('Error occured on Facebook Access Token fetch', error);
                    return reject(error);
                }
                else {
                    state.accessToken = _parseAccessTokenFromBody(body);
                    console.log('FB Access Token retrieved');
                    return resolve(_extendTokenDuration(state.accessToken));
                }
            }
        );
    });
};

function _extendTokenDuration(accessToken) {
    return new Promise(function(resolve, reject) {
        // GET /oauth/access_token?
        // grant_type=fb_exchange_token&
        // client_id={app-id}&
        // client_secret={app-secret}&
        // fb_exchange_token={short-lived-token}

        request.get('https://graph.facebook.com/oauth/access_token?' +
            'client_id=' + FACEBOOK_APP_ID +
            '&client_secret=' + FACEBOOK_APP_SECRET +
            '&grant_type=client_credentials' +
            '&access_token=' + accessToken +
            '&fb_exchange_token=' + accessToken +
            '&redirect_uri=https://konehuone.co', // unused but required
            function(error, response, body) {
                if (error) {
                    console.log('Error occured on Facebook Access Token extension', error);
                    return reject(error);
                }
                else {
                    console.log('FB Access Token extended');
                    state.accessToken = _parseAccessTokenFromBody(body);

                    return resolve(state.accessToken);
                }
            }
        );
    });
}

function _parseAccessTokenFromBody(body) {
    // body is "access_token=<token>", parse it
    return body.split('=')[1];
}

module.exports = service;
