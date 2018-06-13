var Contentstack = require('contentstack')
var config = require('config')

exports.Stack = Contentstack.Stack(config.get('api_key'), config.get('access_token'),config.get('environment'))