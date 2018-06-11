var express = require('express')
var router = express.Router()

var content = require('../models/model')


router.get('/', function(req, res) {
    content.cms(function(data) {
    res.render('home.html', data)
    })
})

module.exports = router