var express = require('express');
var router = express.Router();

const RoomController=require('../roomController')

/* GET home page. */
router.get('/', RoomController.list);

router.get('/:roomID',RoomController.detail);

module.exports = router;
