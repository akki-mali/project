var request = require('request')
var json = require('../config/config')


module.exports.cms = function (callback) {
    request(json.options, function (err, res2, result) {
        var data = JSON.parse(result)
      callback (data)
    })
}