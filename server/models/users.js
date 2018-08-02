import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

let userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String
    },
    name: String
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);