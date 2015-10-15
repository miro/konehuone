// # Includes
var request     = require('request');
var Promise     = require('bluebird');
var ig          = require('instagram-node').instagram();
var _           = require('lodash');

// # Constants
var CLIENT_ID = process.env.KH_IG_CLIENT_ID; // user key to your Instagram app
var CLIENT_SECRET = process.env.KH_IG_CLIENT_SECRET;
if (!CLIENT_ID || !CLIENT_SECRET) {
    console.log('Instagram app credentials are not set!');
}

var userId = 321145659; // user id for IG user whos images we are fetching. this one is @konehuone

var service = {};

// Init with credentials
ig.use({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET });


service.getTagInfo = function(tagName) {
    return new Promise(function(resolve, reject) {
        ig.tag(tagName, function(err, result, remaining, limit) {
            if (err) {
                reject(err)
            } else {
                resolve(result);
            }
        });
    })
};


service.getRecentImages = function(tagName, amount) {
    amount = amount || 6;

    return new Promise(function(resolve, reject) {
        ig.tag_media_recent(tagName, function(err, medias, pagination, remaining, limit) {
            if (err) {
                reject(err)
            } else {
                medias = medias.slice(0, amount);

                var parsedMedias = _.map(medias, function(media) {
                    return {
                        thumbUrl: media.images.thumbnail.url,
                        user: '@' + media.user.username,
                        link: media.link
                    }
                });

                resolve(parsedMedias);
            }
        });
    });
};
module.exports = service;
