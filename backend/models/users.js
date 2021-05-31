const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username:{
        type: String,
        required: [true, 'Username is required']
    },
    password:{
        type: String,
        required: [true, 'Password is required']
    }
})

const Users = mongoose.model('users', UsersSchema);
module.exports = Users;