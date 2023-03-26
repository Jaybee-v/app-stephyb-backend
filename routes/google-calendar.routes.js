const express = require("express")
const router = express.Router()
const googleCtrl = require("../controllers/google-calendar")

router.get("/", googleCtrl.getCalender)

module.exports = router
