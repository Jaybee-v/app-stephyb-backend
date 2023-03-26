const UserData = require("../models/userData")

exports.addUserData = (req, res, next) => {
    try {
        const data = new UserData({
            userId: req.body.userId,
            address: req.body.address,
            city: req.body.city,
            postal_code: req.body.postal_code,
        })
        data.save()
            .then(() => res.status(201).json({ message: "Data added" }))
            .catch((err) => console.log(err))
    } catch (err) {
        console.log(err)
    }
}

exports.getUserData = (req, res, next) => {
    try {
        UserData.findOne({ userId: req.params.id })
            .then((data) => res.status(200).json(data))
            .catch((err) => console.log(err))
    } catch (err) {
        console.log(err)
    }
}

exports.updateUserData = (req, res, next) => {
    try {
        UserData.findOne({ userId: req.params.id }).then((data) => {
            if (data.userId != req.body.userId || req.body.userId != "admin") {
                res.status(401).json({ message: "Action not authorized!" })
            } else {
                UserData.updateOne({ userId: req.params.id }, { ...req.body })
                    .then(() =>
                        res
                            .status(200)
                            .json({ message: "UserData have been updated" })
                    )
                    .catch((error) => res.status(400).json({ error }))
            }
        })
    } catch (err) {
        console.log(err)
    }
}
