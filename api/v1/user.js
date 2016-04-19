
function main(app){


/**
 *@api {get} /user 使用者資訊 Request
 *@apiName GetUser
 *@apiGroup User
 *@apiVersion 1.0.0
 *
 *@apiSuccess {String} name 使用者名稱.
 *@apiSuccess {String} info 使用者資訊.
 *
 *@apiSuccessExample Example data on success:
 *{
 *	name:'Jack',
 *	info:'blahblahblah...'
 *}
 */
app.get('/api/v1/user',function(req, res){
	var data = {
		name:'Jack',
		info:123
	}
	res.setHeader('Content-Type', 'application/json');
	res.send(data); 
});	



}

module.exports = main;