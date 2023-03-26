const express = require("express")
const router = express.Router()
const pastHairstylesCtrl = require("../controllers/pastHairstyles.controller")

router.post("/", pastHairstylesCtrl.addPastHairstyles)

router.get("/:id", pastHairstylesCtrl.getPastHairstylesByUser)

router.put("/:id", pastHairstylesCtrl.updatePastHairstyles)

module.exports = router
