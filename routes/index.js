var express = require('express');
var router = express.Router();
var Heroes = require('../models/heros.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Application' });
});

router.get('/saveData', function(req, res, next) {
	Heroes.saveNew(req.query)
	 .then(function(){
	 	res.redirect('/getAllHeroes')
	 })
    .catch(console.log('ERR :: is resolving the promise'))
});

router.get('/deleteRow', function(req, res, next) {
	Heroes.deleteRow(req.query)
	 .then(function(){
	 	res.redirect('/getAllHeroes')
	 })
    .catch(console.log('ERR :: is resolving the promise'))
});

router.get('/getAllHeroes', function(req, res, next) {
	Heroes.getAll()
	 .then(function(reVal){
	 	res.render('heros', {data : reVal})
	 })
    .catch(console.log('ERR :: is resolving the promise'))
});

router.get('/getSingle', function(req, res, next) {
	Heroes.getSingle(req.query)
	 .then(function(reVal){
	 	res.render('singleData', {data : reVal})
	 })
    .catch(console.log('ERR :: is resolving the promise'))
});


module.exports = router;
