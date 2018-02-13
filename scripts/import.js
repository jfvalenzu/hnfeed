module.exports = function(checkEmpty) {
    
    var algoliaAPI = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs';
    var request = require('request');
    
    request({url: algoliaAPI, json: true}, function(err, res, json) {
      if (err) {
        throw err;
      }
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://localhost:27017/news', function (err, db) {
          if (err) throw err
          
        if(checkEmpty){
              db.collection('hits').find({},{_id:1, title: 1, author:1, story_url:1,title:1,story_title:1,created_at:1,url:1}, {sort:[["created_at",1]]}).toArray(function (err, result) {
                    if (err) throw err
                    if(result.length == 0){
                        db.collection('hits').insertMany(json["hits"]);
                        db.close();  
                    }
                });       
          
        }
        else{
            db.collection('hits').insertMany(json["hits"]);
            db.close();  
           
        }      
          
             
    });
    
    });
    return function(req, res, next) {
        next();
    };
};