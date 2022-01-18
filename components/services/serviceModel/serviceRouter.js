var express = require('express');
var router = express.Router();

const ServiceController=require('../serviceController')

/* GET home page. */
router.get('/', ServiceController.list);

module.exports = router;
