var express = require('express')
var router = express.Router()
var Stack = require('../models/cs-sdk')

router.get('/blog/:title', function(req,res){
    console.log(req.params.title)
    Stack.ContentType('blogs').Query()
     .where('title', req.params.title)
    .toJSON()
    .find()
    .spread(function success(result) {
        console.log(result)
      res.render('blog.html', {
            entry: result[0]
        })
    })
})

module.exports = router