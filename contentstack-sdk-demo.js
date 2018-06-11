var Contentstack = require('contentstack');

const Stack = Contentstack.Stack("blt83726f918894d893", "bltafd1f786644eb413", "preview");

const Query = Stack.ContentType('home').Entry("blt8f72c644b29d45e4")
Query.fetch()
   .then(function success(entry) {
       console.log(entry.get('url')); // Retrieve field value by providing a field's uid
       console.log(entry.toJSON()); // Convert the entry result object to JSON
   }, function error(err) {
       // err object
   });
