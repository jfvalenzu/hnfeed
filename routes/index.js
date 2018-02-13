var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/news', function (err, db) {
        if (err) throw err
        db.collection('hits').find({},{_id:1, title: 1, author:1, story_url:1,title:1,story_title:1,created_at:1,url:1}, {sort:[["created_at",1]]}).toArray(function (err, result) {
        if (err) throw err
          res.render('index', { title: 'HN Feed' , news: result}); 
      });
        db.close();

    });
});
module.exports = router;
