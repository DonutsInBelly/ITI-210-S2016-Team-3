module.exports = function(app)
{
  app.get('/', function(req, res)
  {
    res.sendfile('views/index.html');
  });

  app.get('/index', function(req, res)
  {
    res.redirect('/');
  });

  app.get('/login', function(req, res) {
    res.render('login.html', {
      message: req.flash('loginMessage')
    });
  });

  app.get('/signup', function(req, res) {
    res.render('profile.html', {
      user: req.user
    });
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}
