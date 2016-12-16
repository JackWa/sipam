var express = require('express');
var bodyParser = require('body-parser');
var dbTools = require('../dbutils/dbutils.js');
var app = express()
var port = 1337;


app.listen(port, function() {
	console.log('listening on port ' + port);
});

app.get('/api/v0/gethome', function(req, res, next){
	dbTools.getHome().then(function(payload){
		res.status(200).send(payload);
	});
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/api/v0/addrange', function(req, res){
	var data = req.body;
	var network = data.network;
	var submask = data.submask;
	var desc = data.description;
	var vlan = data.vlan;
	var vrf = data.vrf;
	var notes = data.notes;
	dbTools.putRange(network, submask, desc, vlan, vrf, notes).then(function(payload){
		res.status(200).send(data);
	});
});

