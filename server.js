var express =   require("express");
var app         =   express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.static('view'));
app.use(express.static('viewModel'));

app.get('/',function(req,res){
    res.sendFile(__dirname + "index.html");
    // res.sendFile(__dirname + "/login.vue");
});

app.get('/api/v1/data',function(req, res){
	var data = {
		name:'Jack',
		value:123
	}
	res.setHeader('Content-Type', 'application/json');
	res.send(data); 
});

app.listen(port,function(){
    console.log("Run http://localhost:"+port);
});