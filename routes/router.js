var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('spinner', { title: 'Madhav M Nair: Personal Website' });
});

module.exports = router;
