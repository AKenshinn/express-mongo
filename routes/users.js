var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.route('/')
    .get(function(req, res) {
        var condition = {
            //'email': new RegExp('admin', 'i')
        };

        User.find(condition, function(err, result) {
            if (err) {
                return console.error(err);
            }

            res.render('users/index', {
                title: 'Users',
                userlist: result
            });
        });
    });

router.route('/store')
    .post(function(req, res) {
        var data = req.body;

        User.store(data, function(err, result) {
            if (err) {
                return console.error(err);
            }

            res.redirect('/users');
        })
    });

router.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;

        User.findById(id, function(err, result) {
            if (err) {
                return console.error(err);
            }

            res.json(result);
        })
    })
    .delete(function(req,res){
        var id = req.params.id;

        User.destroy(id, function(err, result) {
            if (err) {
                return console.error(err);
            }

            res.redirect('/users');
        });
    });

router.route('/:id/edit')
    .put(function(req, res) {
        var data = req.body;
        var id = req.params.id;
        User.update(id, data, function(err, result) {
            if (err) {
                return console.error(err);
            }

            res.redirect('/users');
        });
    });

module.exports = router;
