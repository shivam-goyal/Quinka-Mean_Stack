var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db1 = mongojs('contactlist',['contactlist']);
var db2 = mongojs('contacts',['contacts']);
var bodyParser = require('body-parser');
var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path');

//app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/contactlist',function (req,res){
	console.log('I recieved a get request');

	db1.contactlist.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	});

});



app.get('/contacts',function (req,res){
	console.log('I recieved a get request for contacts');

	db2.contacts.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	});

});

app.post('/contactlist', function (req,res){
	console.log(req.body);
	db1.contactlist.insert(req.body, function(err,doc){
		res.json(doc);
	});
});
/*app.post('/contacts', function (req,res){
	console.log(req.body);
	db2.contacts.insert(req.body, function(err,doc){
		res.json(doc);
	});
});
*/app.delete('/contactlist/:id',function (req,res){
	var id = req.params.id;
	console.log(id);
	db1.contactlist.remove({_id: mongojs.ObjectId(id)},function (err,doc){
		res.json(doc);
	});
});
//require('http').createServer(require('serve-static')('.')).listen(3000);
//connect().use(serveStatic(__dirname)).listen(3000);
app.listen(3000);

console.log("server running on port 3000....");