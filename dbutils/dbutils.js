var mysql	= require('mysql');
var newConnection = function(){
	return mysql.createConnection({
	  host :        'localhost',
	  user :        'root',
	  password :    '',
	  database :    'sipam'
});
};


var getHome =  function(){
return new Promise(function(resolve){
var connection = newConnection();
var query = 'SELECT * FROM subnets';
connection.query(query, function(err, rows, fields) {
		if (err) throw err;
		resolve(rows);
	});
	connection.end();
});
};

var putRange = function(range, submask, name, vlan, vrf, desc){
return new Promise(function(resolve){
var connection = newConnection();
var query = 'INSERT INTO subnets (network, submask, description, vlan, vrf, notes) VALUES (' + "'"  + range + "'" + ',' + submask + ',' + "'" + name + "'" + ',' + vlan + ',' + "'" + vrf + "'" + ',' + "'" + desc + "'" + ');'
	connection.query(query, function(err, rows, fields) {
		if (err) throw err;
		resolve(rows);
	});
	connection.end();
});
};

exports.getHome = getHome;
exports.putRange = putRange;
