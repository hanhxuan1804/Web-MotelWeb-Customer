var express = require('express');
var router = express.Router();

const myAccountController = require('./myAccountController')

/* GET home page. */
router.get('/user/:userID', myAccountController.detail);

router.get('/user/:userID/editAccount',myAccountController.editAccount);

module.exports = router;