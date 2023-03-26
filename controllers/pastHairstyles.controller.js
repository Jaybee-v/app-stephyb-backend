const PastHairstyles = require("../models/pastHairstyles")

exports.addPastHairstyles = (req, res, next) => {
    const pastBody = req.body
    try {
        const past = new PastHairstyles({
            userId: pastbody.userId,
            event_date: pastBody.event_date,
            description: pastBody.description,
            paid: pastBody.paid,
        })
        past.save()
            .then(() =>
                res
                    .status(201)
                    .json({ message: "past Hairstyles have been created" })
            )
            .catch((err) => console.log(err))
    } catch (err) {
        console.log(err)
    }
}

exports.getPastHairstylesByUser = (req, res, next) => {
    const id_user = req.params.id
    try {
        PastHairstyles.find({ userId: id_user })
            .then((data) => res.status(200).json(data))
            .catch((err) => console.log(err))
    } catch (err) {
        console.log(err)
    }
}

exports.updatePastHairstyles = (req, res, next) => {
    const id = req.params.id
    try {
        PastHairstyles.findOne({ _id: id }).then((data) => {
            if (req.body.userId != "admin") {
                res.status(401).json({ message: "Action not authorized!" })
            } else {
                PastHairstyles.updateOne({ _id: id }, { ...req.body, _id: id })
                    .then(() =>
                        res
                            .status(200)
                            .json({
                                message: "Past Hairstyle has been updated",
                            })
                    )
                    .catch((err) => console.log(err))
            }
        })
    } catch (err) {
        console.log(err)
    }
}
