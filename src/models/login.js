const mongoose = require("mongoose");
const Login = mongoose.Schema({
    email: String,
    password : String,
    
});

module.exports = mongoose.model("login",Login);