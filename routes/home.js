var express = require('express')
var router = express.Router()
var Stack = require('../models/cs-sdk')


router.get('/', function (req, res) {
    Stack.ContentType('home').Query()
    .toJSON()
    .find()
    .spread(function success(result) {
        res.render('home.html', {
            entry: result[0],
        })
    })
})

module.exports = router