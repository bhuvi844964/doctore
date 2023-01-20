const express = require('express');
const router = express.Router();

const doctorController = require("../controllers/doctoreController")


router.post("/registration", doctorController.createProfile)

router.post("/login", doctorController.login)

router.get("/getDoctore", doctorController.getDoctore)

module.exports = router; 