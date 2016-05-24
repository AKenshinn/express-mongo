var express = require('express');
var router = express.Router();
var User = require('../models/User');
//var mongoose = require('mongoose');

router.get('/', function(req, res) {
    var condition = {
        //'email': new RegExp('admin', 'i')
    };
    User.find(condition, function(err, users) {
        if (err)
            return console.error(err);
        res.render('users/index', { userlist: users });
    });
});

module.exports = router;
