
var express = require('express')
var router = express.Router()
var Stack = require('../models/cs-sdk')


router.get('/about', function(req, res) {
    Stack.ContentType('about').Query()
    .toJSON()
    .find()
    .spread(function success(result) {
        res.render('about.html', {
            entry: result[0],
        })
    })
})

module.exports = router