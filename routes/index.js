


module.exports = function(app) {
  
  app.use('/', require('../middlewares'))
  app.use('/', require('./home'))
  app.use('/', require('./about'))
  app.use('/', require('./list'))
  app.use('/', require('./blog'))

}