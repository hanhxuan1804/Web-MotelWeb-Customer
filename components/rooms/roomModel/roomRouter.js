var express = require('express');
var router = express.Router();

const RoomController=require('../roomController')

/* GET home page. */
router.get('/', RoomController.list);

router.get('/:roomID',RoomController.detail);

router.get('/:roomID/order',RoomController.order);

module.exports = router;
