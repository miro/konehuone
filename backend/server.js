// # Imports
var express         = require('express');
var app             = express();
var Promise         = require('bluebird');

var facebook        = require('./facebook');
var instagame       = require('./instagame');

// # Constants
var FB_EVENT_ID = '1756954314531757';

// # Configuration
var environment = process.env.NODE_ENV || 'development';
var serverPort = process.env.PORT || 6001;


// # Fetch
facebook.initialize(FB_EVENT_ID); // KH10 FB Event ID


// # Routes
app.get('/api/competitions/kpi', function(req, res) {
    Promise.props({
        ig: instagame.getTagInfo('konehuonex'),
        fb: facebook.getEventInfo()
    })
    .then(function(compData) {
        res.send(compData);
    })
    .error(function(error) {
        console.log('Error on Competition data fetch', error);
        res.sendStatus(500);
    });
});


console.log('### Konehuone Server started!');
console.log('on port', serverPort);
app.listen(serverPort);
