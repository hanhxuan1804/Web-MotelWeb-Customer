var express = require('express');
var router = express.Router();

const LoginController = require('./loginController');

/* GET home page. */
router.get('/', LoginController.list);

module.exports = router;
