var express =   require("express");
var app         =   express();

var port = process.env.PORT || 3000;

app.use(express.static('assets'));
app.use(express.static('view'));
app.use(express.static('viewModel'));



app.get('/',function(req,res){
    res.sendFile(__dirname + "index.html");
});

//api
require('./api/v1/user.js')(app);


app.listen(port,function(){
    console.log("Run http://localhost:"+port);
});