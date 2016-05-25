var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    __v: { type: Number, default: 0 }
});

var User = mongoose.model('User', userSchema);

exports.find = function(condition, done){
    console.log('----------User.find()----------');
    console.log('condition: %j', condition);

    User.find(condition, function(err, result) {
        if (err) {
            console.log('error...');
            done(err);
        }

        if(!result) {
            console.log('empty...');
            done(null, []);
        }

        console.log('result: %j', result); //result is user that depend on condition
        done(null,result); //return result
        console.log('-------------------------------');
    });
};

exports.findById = function(id, done) {
    console.log('----------User.findById()----------');
    console.log('id: %j', id);

    User.findById(id, function(err, result) {
        if (err) {
            console.log('error...');
            done(err);
        }

        if(!result) {
            console.log('empty...');
            done(null, []);
        }

        console.log('result: %j', result); //result is user that depend on condition
        done(null,result); //return result
        console.log('-------------------------------');
    });
}

exports.store = function(data, done) {
    console.log('----------User.store()----------');
    console.log('data: %j', data);

    var store = new User(data);
    store.save(function(err, result) {
        if (err) {
            console.log('error...');
            done(err);
        }

        console.log('result: %j', result); //result is data that saved
        done(null,null); //return result
        console.log('-------------------------------');
    });
}

exports.update = function(id, data, done) {
    console.log('----------User.update()----------');
    console.log('id: ', id);
    console.log('data: %j', data);

    User.findByIdAndUpdate(id, { $set: data, $inc: { __v: 1 } }, {new: true}, function(err, result) {
        if (err) {
            console.log('error...');
            done(err);
        }

        console.log('result: %j', result); //result is data that saved
        done(null,null); //return result
        console.log('-------------------------------');
    });
}

exports.destroy = function(id, done) {
    console.log('----------User.delete()----------');
    console.log('id: %j', id);

    User.remove({ _id: id }, function (err, result) {
        if (err) {
            console.log('error...');
            done(err);
        }

        console.log('result: %j', result); //result is data that saved
        done(null,null); //return result
        console.log('-------------------------------');
    });
}
