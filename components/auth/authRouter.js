var express = require('express');
var router = express.Router();
const passport = require('../../auth/passport');

const LoginController = require('./loginController');

/* GET home page. */
router.get('/', LoginController.login);

// router.post('/login',
//     passport.authenticate('local',{
//         successRedirect:'/',
//         failureRedirect:'/login',
//         failureFlash: true
//     })
//);

router.post('/', passport.authenticate('local'),
  function(req, res) {
    if(req.user)
      {
        res.redirect("/rooms");
      }

    else
      res.redirect('/login');
  },
);

module.exports = router;
