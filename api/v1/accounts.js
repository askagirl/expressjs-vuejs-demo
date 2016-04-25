
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

var ObjectID = require('mongodb').ObjectID;

var db = require('../../db.js').getDB('apidb');

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'apidb' database");
        db.collection('accounts', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'accounts' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.auth = function(req, res) {
    var account = req.body;

    console.log('auth account: ' + JSON.stringify(account));
    db.collection('accounts', function(err, collection) {
        collection.findOne({name:account.name, password:account.password}, function(err, item) {
        	if(item){
        		res.send(item);	
        	}else{
        		res.send({'error':'auth error'});
        	}
            
        });
    });
};

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving account: ' + id);
    db.collection('accounts', function(err, collection) {
        collection.findOne({_id:new ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('accounts', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addAccount = function(req, res) {
    var account = req.body;
    console.log('Adding account: ' + JSON.stringify(account));
    db.collection('accounts', function(err, collection) {
        collection.insert(account, {safe:true}, function(err, result) {
        	console.log(result);
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result));
                res.send(result);
            }
        });
    });
}

exports.updateAccount = function(req, res) {
    var id = req.params.id;
    var account = req.body;
    console.log('Updating account: ' + id);
    console.log(JSON.stringify(account));
    db.collection('accounts', function(err, collection) {
        collection.update({'_id':new ObjectID(id)}, account, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating account: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(account);
            }
        });
    });
}

exports.deleteAccount = function(req, res) {
    var id = req.params.id;
    console.log('Deleting account: ' + id);
    db.collection('accounts', function(err, collection) {
        collection.remove({'_id':new ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}


/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var accounts = [
    {
        name: "Jack",
        password: "1234"
    },
    {
        name: "admin",
        password: "70444999"
    }];

    db.collection('accounts', function(err, collection) {
        collection.insert(accounts, {safe:true}, function(err, result) {});
    });

};
