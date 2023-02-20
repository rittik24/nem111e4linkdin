const mongoose = require("mongoose");

const linkdinSchema = mongoose.Schema({
    title: String,
    body: String,
    device: String,
    no_if_comments: Number
})

const LinkdinModel=mongoose.model("post",linkdinSchema)

module.exports={
    LinkdinModel
}