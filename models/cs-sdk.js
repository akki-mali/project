var Contentstack = require('contentstack')
var config = require('config')

var Stack = Contentstack.Stack(config.get('api_key'), config.get('access_token'),config.get('environment'))

module.exports = Stack