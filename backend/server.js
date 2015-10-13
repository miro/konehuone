// # Imports
var express         = require('express');
var app             = express();
var Promise         = require('bluebird');
var path            = require('path');

var facebook        = require('./facebook');
var instagame       = require('./instagame');

// # Constants
var FB_EVENT_ID = '1756954314531757';

// # Configuration
var environment = process.env.NODE_ENV || 'development';
var serverPort = process.env.PORT || 6001;
var frontendDir = (environment === 'development') ? '../build/' : '../dist/';


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

app.get('/api/instagram/recent', function(req, res) {
    instagame.getRecentImages('konehuonex', 6)
    .then(function(medias) {
        res.send(medias);
    })
    .error(function(error) {
        console.log('Error on Instagram recent fetch', error);
        res.sendStatus(500);
    });
});


// # Static file serving

app.use('/', express.static(path.join(__dirname, frontendDir)));
app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')));


console.log('### Konehuone Server started on environment', environment, '!');
console.log('on port', serverPort);
app.listen(serverPort);


