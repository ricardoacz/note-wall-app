const passport = require('passport')
const User = require('../models/User')

exports.getLogin = (req, res) => {
    if (req.user) {
      return res.redirect('/wall')
    }
    res.render('login', {
      title: 'Login'
    })
  }
  
exports.postLogin = (req, res, next) => {
  
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err) }
      if (!user) {
        console.log('errors', info)
        return res.redirect('/login')
      }
      req.logIn(user, (err) => {
        if (err) { return next(err) }
        console.log('success', { msg: 'Success! You are logged in.' })
        res.redirect(req.session.returnTo || '/wall')
      })
    })(req, res, next)
  }
  

  exports.logout = (req, res, next) => {
    req.logout((err) => {
      if (err) { return next(err) }
      req.session.destroy((err) => {
        if (err) {
          console.log('Error : Failed to destroy the session during logout.', err)
          return next(err)
        }
        req.user = null
        res.redirect('/')
      })
    })
  }
  
exports.getSignup = (req, res) => {
    if (req.user) {
      return res.redirect('/wall')
    }
    res.render('signup', {
      title: 'Create Account'
    })
  }
  
exports.postSignup = (req, res, next) => {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })

User.findOne({ email: req.body.email })
    .then(existingUser => {
      if (existingUser) {
        req.flash('errors', { msg: 'Account with that email address already exists.' });
        return res.redirect('../signup');
      }
      return user.save();
    })
    .then(() => {
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/wall');
      });
    })
    .catch(err => next(err));
};