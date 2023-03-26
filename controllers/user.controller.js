const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
require("dotenv").config()

exports.signup = (req, res, next) => {
    console.log(req.body)
    try {
        bcrypt
            .hash(req.body.password, 10)
            .then((hash) => {
                console.log(1)
                const user = new User({
                    name: req.body.name,
                    family_name: req.body.family_name,
                    email: req.body.email,
                    password: hash,
                })
                user.save()
                    .then(() =>
                        res.status(201).json({ message: "New user registered" })
                    )
                    .catch((error) => res.status(400).json({ error }))
            })
            .catch((error) => res.status(500).json({ error }))
    } catch (err) {
        console.log(err)
    }
}

exports.signin = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user === null) {
                res.status(401).json({ message: "Incorrect email or password" })
            } else {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((valid) => {
                        if (!valid) {
                            res.status(401).json({
                                message: "Incorrect email or password",
                            })
                        } else {
                            res.status(200).json({
                                userId: user._id,
                                token: jwt.sign(
                                    { userId: user._id },
                                    process.env.TOKEN,
                                    { expiresIn: "72h" }
                                ),
                            })
                        }
                    })
                    .catch((error) => {
                        res.status(500).json({ error })
                    })
            }
        })
        .catch((error) => {
            res.status(500).json({ error })
        })
}
