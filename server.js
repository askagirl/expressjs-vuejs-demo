var express =   require("express");
var app         =   express();

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

var port = process.env.PORT || 3000;

app.use(express.static('assets'));
app.use(express.static('view'));
app.use(express.static('viewModel'));

var db = require('./db.js');
db.connectDB('localhost', 27017, 'apidb');

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/doc',function(req,res){
    res.sendFile(__dirname + "/doc/index.html");
});

//api
var account = require('./api/v1/accounts');
app.get('/api/v1/accounts', account.findAll);
app.get('/api/v1/accounts/:id', account.findById);
app.post('/api/v1/accounts', account.addAccount);
app.put('/api/v1/accounts/:id', account.updateAccount);
app.delete('/api/v1/accounts/:id', account.deleteAccount);

app.post('/api/v1/auth', account.auth);

var wine = require('./api/v1/wines');
app.get('/api/v1/wines', wine.findAll);
app.get('/api/v1/wines/:id', wine.findById);
app.post('/api/v1/wines', wine.addWine);
app.put('/api/v1/wines/:id', wine.updateWine);
app.delete('/api/v1/wines/:id', wine.deleteWine);


app.listen(port,function(){
    console.log("Run http://localhost:"+port);
});