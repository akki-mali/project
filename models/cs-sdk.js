var Contentstack = require('contentstack');
var config = require('../config/config')

const Stack = Contentstack.Stack(config.api_key, config.access_token,config.environment);

module.exports.cms = function (callback) {
    const Query = Stack.ContentType('home').Entry("bltaf9b98d9b135acaa")
    Query.fetch()
        .then(function success(entry) {
            var data = entry.toJSON()
            callback(data)
        })
}