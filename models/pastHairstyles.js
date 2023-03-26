const mongoose = require("mongoose")

const pastHairstyleSchema = mongoose.Schema({
    userId: { type: String },
    event_date: { type: Date },
    description: { type: String },
    paid: { type: String },
})

const pastHairstyleModel = mongoose.model("PastHairstyles", pastHairstyleSchema)

module.exports = pastHairstyleModel
