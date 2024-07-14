const mongoose = require('mongoose');
const { use } = require('passport');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type:String,
        require: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
        type:String,
        require: true,
    },
    Username: {
        type:String,
        require: true,
    },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);