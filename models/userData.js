const mongoose = require("mongoose")

const userDataSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, require: true },
    postal_code: { type: String },
})

const userDataModel = mongoose.model("UserData", userDataSchema)

module.exports = userDataModel
