const mongoose = require('mongoose');

const Joind = mongoose.Schema({
    email:String,
    phone:String,
    gender:String,
    dob:String,
    number:String,
    city:String,
    amount:String,
});

module.exports = mongoose.model("joinform",Joind);