
function main(app){



var express = require('express');
var router = express.Router();
app.use('/api/v1/user', router);

/**
 *@api {get} /user/userlist 取得使用者資訊 Request
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
router.get('/userlist',function(req, res){
	var data = {
		name:'Jack',
		info:123
	}
	// res.setHeader('Content-Type', 'application/json');
	// res.send(data); 
	res.json(data);	
});	

/**
 *@api {post} /user/adduser 新增使用者 Request
 *@apiName AddUser
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

}

module.exports = main;