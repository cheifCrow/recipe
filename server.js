const express = require('express');
const app = express();
const fs = require('fs');
const crypto = require('crypto');
const Base64 = require('js-base64').Base64;
const bodyParser = require('body-parser');
const port = 8080;
const host = '127.0.0.1';
const secret = 'notreallysecret';

var users;

fs.readFile('./users.json', function(err, data) {
	if (!err) {
		users = JSON.parse(data);
	} else {
		console.log('could not load users file');
	}
});


var serverStats = {
	startTime: new Date()
};

app.use(express.static('app/static'));
app.use(bodyParser.json());

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.post('/login', function(req, res) {
	if (users) {
		var goodUser = false;
		var token;
		for (var i = 0; i < users.length; i++) {
			if (users[i].username === req.body.username) {
				if(users[i].password === req.body.password) {
					goodUser = true;
					var expiry = new Date();
					expiry = expiry.setMonth(expiry.getMonth() + 1);
					token = {
						header: {alg: "HS256", typ: "JWT"},
						payload: {
							user: users[i].username,
							exp: expiry
						}
					};
					token = Base64.encode(JSON.stringify(token.header)) + "." + Base64.encode(JSON.stringify(token.payload));
					var sig = crypto.createHmac('sha256', secret).update(token).digest('base64');
					token += "." + sig;
				}
				break;
			}
		}
		if (goodUser) {
			res.status(200).send({message: 'Success', jwt: token});
		} else {
			res.status(401).send({message: 'Invalid credentials'});
		}
	} else {
		res.status(200).send({message: 'Not implemented yet'});
	}
});

app.post('/verify', function(req, res) {
	var header = req.get('Authorization').split(' ');
	if (header[0] === 'Bearer') {
		var jwt = header[1].split('.');
		var token =  jwt[0] + '.' + jwt[1];
		var sig = jwt[2];

		var verify = crypto.createHmac('sha256', secret).update(token).digest('base64');

		if (sig === verify) {
			console.log('Validated token');
			res.status(200).send({message: 'Token accepted'});
		} else {
			console.log('Invalid token');
			res.status(401).send({message: 'Invalid token'});
		}
	} else {
		console.log('Malformed header');
		res.status(400).send({message: 'Malformed header'});
	}
});

app.post('/api/v1/serverStats', function(req, res) {
	serverStats.upTime = new Date() - serverStats.startTime;
	res.json(serverStats);
});

app.listen(port, host, function() {
	console.log('Server listening on ' + host + ':' + port);
});