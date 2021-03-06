module.exports = (app, passport, database) => {

  app.get('/signup', (req, res) => {
    res.render('signup', {
      user: req,
      message: req.flash("message")
    });
  })

  app.post('/signup',
    passport.authenticate("signup", {
      successRedirect: "/login",
      failureRedirect: "/signup",
      failureFlash: true
    })
  )

  //------------------------------------------------

  app.get('/about', (req, res) => {
    res.render('about', {
      user: req,
      userData: req.user
    });
  })

  //------------------------------------------------


  app.get("/login", (req, res) => {
    if (!req.isAuthenticated()) {
      res.render("login", { message: req.flash('message') });
    } else {
      res.redirect("/");
    }
  });

  app.post(
    "/login",
    passport.authenticate("login", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    })
  );

  //------------------------------------------------

  app.get("/logged", (req, res) => {
    if (req.isAuthenticated()) {
      res.render("logged");
    } else {
      res.redirect("/signup");
    }
  });

  //------------------------------------------------

  app.get('/privacypolicy', (req,res) => {
    res.render('privacy-policy', {
      user : req,
      userData : req.user
    })
  })

  //------------------------------------------------



  //------------------------------------------------


  app.get('/help', (req, res) => {
    res.render('help', {
      user: req,
      userData: req.user
    })
  })

  //------------------------------------------------

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  //------------------------------------------------

  app.get('/help', (req, res) => {
    res.render('help', {
      user: req,
      userData: req.user
    })
  })

  // --------------------------------------------------
  // Path: /api
  //   Dynamic content distribution - return raw data through AJAX
  const api = require('./functions/api');
  app.post('/api', function (req, res) { api.run(req.body, req, res); });
  app.get('/api', function (req, res) { api.run(req.query, req, res); });

  require('./userRouter')(app, database);
  require('./challengesRouter')(app, database);
  require('./indexRouter')(app, database);
  require('./galleryRouter')(app, database);
  require('./albumsRouter')(app, database);
  require('./imageRouter')(app, database);

  // --------------------------------------------------
  // Path: /create
  //   Page for creating (something)
  app.get('/create', function (req, res) {
    res.render('create', {
      user: req,
      userData: req.user,
    });
  });

  app.listen(5000, () => {
    console.log("listening on 5000..");
  });
};
