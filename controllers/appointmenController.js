const mongoose = require("mongoose")
const doctoreModel = require("../models/doctoreModel");
const appointmentModel = require("../models/appointmentModel")





module.exports.appointment = async function (req, res) {
    try {
      let data = req.body;
    
      let {doctorId,timeDuration,weekAvailability,sloteType,appointmentDate,timeSlote,isAvailable,allDay } = data;
  
     
        let savedData = await appointmentModel.create(data)
        return res.status(201).send({ status : true, msg: savedData })
        
  }
  catch (error) {
    res.status(500).send({ status: false, error: error.message })
  }
  }