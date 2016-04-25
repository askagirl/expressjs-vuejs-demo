var mongo = require('mongodb');

var Server = require('mongodb').Server,
    Db = require('mongodb').Db,
    ObjectID = require('mongodb').ObjectID;

var dbServerMap = {};

exports.connectDB = function(host, port, dbName){
	var server = new Server(host, port, {auto_reconnect: true});
	dbServerMap[dbName] = new Db(dbName, server);
}

exports.getDB = function(dbName){
	var db = dbServerMap[dbName];
	return db;
}