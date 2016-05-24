var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String
});

var User = mongoose.model('User', userSchema);

exports.find = function(condition, done){
    console.log('----------User.find()----------');
    console.log('condition: ' + JSON.stringify(condition));

    User.find(condition, function(err, users) {
        if (err) {
            console.log('error...');
            done(err);
        }

        if(!users) {
            console.log('empty...');
            done(null, []);
        }

        console.log('result: ' + JSON.stringify(users));
        done(null,users); //return result
        console.log('-------------------------------');
    });
};
