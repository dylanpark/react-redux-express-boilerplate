var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/user', function(req, res, next) {
  res.json([
    {
      id: '1',
      title: 'Dylan'
    }
  ]);
});

module.exports = router;
