const mongoose = require("mongoose");
const Influancer = mongoose.Schema({
    iname: String,
    iage : String,
    icity:String,
    description:String,
    label: String,
    label:String,
    lable:String,
    curl: String,
    iurl:String,
});

module.exports = mongoose.model("influancer",Influancer);