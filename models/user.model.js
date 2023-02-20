const mongoose = require("mongoose")

const registerSchema = mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    password: String,
    age: Number,
    city: String
})

const RegisterModel = mongoose.model("user", registerSchema)

module.exports = {
    RegisterModel
}