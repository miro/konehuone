// # Imports
var express         = require('express');
var app             = express();

var facebook        = require('./facebook');
var instagame       = require('./instagame');



// # Configuration
var environment = process.env.NODE_ENV || 'development';
var serverPort = process.env.PORT || 6001;


// # Fetch
facebook.initialize('1756954314531757'); // KH10 FB Event ID


// # Routes
// Static file serving point

app.get('/api/fb-event/kpi', function(req, res) {
    res.send(facebook.getEventInfo());
});

app.get('/api/instagram/kpi', function(req, res) {
    instagame.getTagInfo('konehuone')
    .then(function(info) {
        res.send(info);
    })
    .error(function(error) {
        console.log('Error on Instagram data fetch', error);
        res.sendStatus(500);
    })
});


console.log('### Konehuone Server started!');
console.log('on port', serverPort);
app.listen(serverPort);
