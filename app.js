const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
app.use(bodyParser.json())

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@app-stephyb.xmbv8ds.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"))

// CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    )
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    )
    next()
})

const userRoutes = require("./routes/user.routes")
const userDataRoutes = require("./routes/userData.routes")
const pastHairstylesRoutes = require("./routes/pastHairstyles.routes")
// const googleRoutes = require("./routes/google-calendar.routes")

app.use("/user", userRoutes)
app.use("/user-data", userDataRoutes)
app.use("/past-hairstyle", pastHairstylesRoutes)
// app.use("/calendar", googleRoutes)

module.exports = app
