var express = require('express');
var router = express.Router();

const myAccountController = require('./myAccountController')

/* GET home page. */
router.get('/:userID', myAccountController.detail);

router.get('/:userID/editAccount',myAccountController.editAccount);

// router.get('/myaccount', AccountsController.myaccount);

router.post('/:userID/editAccount/update',myAccountController.myaccountUpdate);

module.exports = router;