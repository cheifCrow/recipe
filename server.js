const express = require('express');
const app = express();
const port = 8080;
const host = '127.0.0.1'

app.use(express.static('app/static'));

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.listen(port, host, function() {
	console.log('Server listening on ' + host + ':' + port);
});