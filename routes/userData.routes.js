const express = require("express")
const router = express.Router()
const userDataCtrl = require("../controllers/userData.controller")

router.post("/", userDataCtrl.addUserData)
router.get("/:id", userDataCtrl.getUserData)
router.put("/:id", userDataCtrl.updateUserData)

module.exports = router
