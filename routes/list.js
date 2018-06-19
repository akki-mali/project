var express = require('express')
var router = express.Router()
var Stack = require('../models/cs-sdk')


router.get('/blog', function(req, res) {
    Stack.ContentType('blogs').Query()
    .toJSON()
    .find()
    .spread(function success(result) {
        res.render('list.html', {
            entry: result,
        })
    })
})


module.exports = router