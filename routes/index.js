var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/old', function(req, res, next) {
  res.render('old', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
