var async = require('async')
var Contentstack = require('contentstack')
var config = require('../config/config')
const Stack = Contentstack.Stack(config.api_key, config.access_token,config.environment)


module.exports = function (req, res, next) {
    async.parallel([
		function (callback) {
			 Stack.ContentType('header').Query()
				.toJSON()
				.find()
				.spread(function success(result) {
					callback(null, result[0])
				}, function error(error) {
					callback(error);
				})
		},
		function (callback) {
			 Stack.ContentType('footer').Query()
				.toJSON()
				.find()
				.spread(function success(result) {
					callback(null, result[0])
				}, function error(error) {
					callback(error)
				})
		}], function (error, success) {
			if (error) return next(error)
			res.locals.partials = {}
			res.locals.partials.header = success[0]
			res.locals.partials.footer = success[1]
            next()
		})
}