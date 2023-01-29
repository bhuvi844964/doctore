const express = require('express');
const router = express.Router();
const multer = require('multer');
const doctorController = require("../controllers/doctorController")
const appointmentController = require("../controllers/appointmentController")
const cors = require("cors");
var fs = require('fs');
const path = require("path");
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: true }));


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "images")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
  }).single('profileImage');




router.post("/registration" , upload, doctorController.createProfile)

router.post("/login", doctorController.login)

router.get("/getDoctore", doctorController.getDoctor)

router.get("/getDoctoreById/:doctorId", doctorController.getDoctorById)



router.post("/appointment", appointmentController.appointment)

router.get("/getWeekById/:doctorId", appointmentController.getWeekById)

router.get("/getAlldayById/:doctorId", appointmentController.getAlldayById)

router.get("/getdateById/:doctorId", appointmentController.getdateById)




module.exports = router; 