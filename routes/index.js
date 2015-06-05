var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*res.render('index', { title: 'ChitChat'})*/
	res.sendFile('index.html',{root: path.resolve(__dirname,'..','html')});
});

module.exports = router;
