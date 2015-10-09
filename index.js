// # Imports
var express         = require('express');
var app             = express();



// # Configuration
var environment = process.env.NODE_ENV || 'development';
var serverPort = process.env.PORT || 6001;


// # Routes
// Static file serving point

app.get('*', function(req, res) {
	res.redirect('https://www.facebook.com/events/1756954314531757/');
});


console.log('### Konehuone Server started!');
console.log('on port', serverPort);
app.listen(serverPort);
