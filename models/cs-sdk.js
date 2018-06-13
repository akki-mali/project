var Contentstack = require('contentstack')
var config = require('../config/config')

exports.Stack = Contentstack.Stack(config.api_key, config.access_token,config.environment)