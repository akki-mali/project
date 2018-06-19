var express = require('express')
var router = express.Router()
var Stack = require('../models/cs-sdk')


router.get('/', function(req, res) {
    Stack.ContentType('blogs').Query()
    .toJSON()
    .find()
    .spread(function success(result) {
        res.render('blog-list.html', {
            entries: result
        })
    })
})


router.get('/:title', function(req,res){
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