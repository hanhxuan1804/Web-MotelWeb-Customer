var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rooms/roomList' , { title: 'Express' });
});

router.get('/:roomID', function(req, res, next) {
  res.render('rooms/roomDetail' , { title: 'Express' });
});
module.exports = router;
