const mongoose = require("mongoose");

const Service = mongoose.Schema({
    title:String,
    description:String,
    link:String,
});


module.exports=mongoose.model("services",Service);