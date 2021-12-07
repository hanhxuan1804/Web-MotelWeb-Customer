var express = require('express');
var router = express.Router();
const passport = require('../../auth/passport');

const LoginController = require('./loginController');

/* GET home page. */
router.get('/', LoginController.login);
router.post('/signup', LoginController.signup);

router.post('/',
    passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/login?wrongLogin'
    })
);

module.exports = router;
