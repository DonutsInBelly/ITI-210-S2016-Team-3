module.exports = function(app)
{
  app.get('/', function(req, res)
  {
    res.sendfile('public_html/index.html');
  });

  app.get('/index', function(req, res)
  {
    res.redirect('/');
  });
  
}
