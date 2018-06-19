


module.exports = function(app) {
  
  app.use('/', require('../middlewares'))
  app.use('/', require('./home'))
  app.use('/', require('./about'))
  app.use('/blog', require('./blog'))


}