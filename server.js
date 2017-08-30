const express = require('express');
const app = express();
const port = 8080;
const host = '127.0.0.1'

var serverStats = {
	startTime: new Date()
}

app.use(express.static('app/static'));

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.post('/api/v1/serverStats', function(req, res) {
	serverStats.upTime = new Date() - serverStats.startTime;
	res.json(serverStats);
});

app.listen(port, host, function() {
	console.log('Server listening on ' + host + ':' + port);
});