var User = require('./user');

module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index.html');
	});

	app.get('/login', function(req, res){
		res.render('login.html', { message: req.flash('loginMessage') });
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/shop',
		failureRedirect: '/login',
		failureFlash: true
	}));

//	app.get('/signup', function(req, res){
//		res.render('signup.html', { message: req.flash('signupMessage') });
//	});
//
//
//	app.post('/signup', passport.authenticate('local-signup', {
//		successRedirect: '/',
//		failureRedirect: '/signup',
//		failureFlash: true
//	}));

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};