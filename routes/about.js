
var express = require('express')
var router = express.Router()
var content = require('../models/model')


router.get('/about', function(req, res) {
    content.cms(function(data) {
    res.render('about.html', data)
    })
})

module.exports = router