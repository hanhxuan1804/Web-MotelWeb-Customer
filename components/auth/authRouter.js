var express = require('express');
var router = express.Router();
const passport = require('../../auth/passport');

const authController = require('./authController');

/* GET home page. */
router.get('/login', authController.login);
router.post('/signup', authController.signup);

router.post('/login',
    passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/auth?wrongLogin'
    })
);
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
module.exports = router;
