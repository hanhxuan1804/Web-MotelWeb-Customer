var express = require('express');
var router = express.Router();

const ServiceController=require('./myAccountController')

/* GET home page. */
router.get('/', ServiceController.detail);

module.exports = router;