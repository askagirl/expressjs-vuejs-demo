var express =   require("express");
var app         =   express();

var port = process.env.PORT || 3000;

app.use(express.static('assets'));
app.use(express.static('view'));
app.use(express.static('viewModel'));

app.get('/',function(req,res){
    res.sendFile(__dirname + "index.html");
});

/**
 *@api {get} /data 使用者資訊 Request
 *@apiName GetUser
 *@apiGroup User
 *@apiVersion 1.0.0
 *
 *@apiSuccess {String} name 使用者名稱.
 *
 *@apiSuccessExample Example data on success:
 *{
 *	name:'Paul'
 *}
 */
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