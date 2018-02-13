var express = require('express');
var router = express.Router();
var news =  [];

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

/* GET home page. */
router.post('/delete/:hitId', function(req, res, next) {
  
    var id = req.params.hitId;
    var objToDelete = {
        _id: ObjectId(id)
    };
    MongoClient.connect('mongodb://localhost:27017/news', function (err, db) {
        if (err) throw err
        db.collection('hits').remove(objToDelete,function(delerr, records){
            if(err){
                console.log("Error" + delerr);                
            }
            else{                
                console.log("id removed");
                console.log(records.result);
            }
        });
        db.close();
    });
    res.send(req.params);
});

module.exports = router;
