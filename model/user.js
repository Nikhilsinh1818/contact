const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserData = new Schema({
    surname :{
        type:String,
     },
     firstname:{
        type:String
     },lastname:{
        type:String
     },
     gender:{
        type:String
     },
    username : {
    type: String,
    required:true,
 },
 password:{
    type: String,
    required:true,
 },
});

let USER = mongoose.model('user', UserData);
module.exports = USER;
