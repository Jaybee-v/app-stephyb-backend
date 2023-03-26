const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/user.controller")

router.post("/signup", userCtrl.signup)
router.put("/:id", userCtrl.updateUser)
router.get("/:id", userCtrl.getUser)

router.post("/signin", userCtrl.signin)

module.exports = router
