const mongoose = require("mongoose")
const doctoreModel = require("../models/doctorModel");
const appointmentModel = require("../models/appointmentModel")
const moment = require("moment");
const { weekdays } = require("moment");




module.exports.appointment = async function (req, res) {
    try {
      let data = req.body;
      let {doctorId,timeDuration,weekAvailability,slotType,isAvailable,allDay,appointmentDate ,slots, startTime ,endTime , startDay , endDay} = data;

      if (!doctorId || doctorId == "")
      return res.status(400).send({ Status: false, message: "Please provide doctorId " })
      if (doctorId) {
        if (!mongoose.isValidObjectId(doctorId))
            return res.status(400).send({ Status: false, message: "Please enter valid doctorId " })
    }

    if (!timeDuration || timeDuration == "")
    return res.status(400).send({ Status: false, message: "Please provide timeDuration " })

    if (!slotType || slotType == "") {
      return res.status(400).send({ Status: false, message: "Please provide slotType" })
  }
  if(slotType){
    if(!( ["week", "date", "all" ].includes(slotType))) {
      return res.status(400).send({ Status: false, message: "Slot Type must be week, date and all " })
    }
}

if(isAvailable === true){

if ((allDay === true && slotType==="all") || (allDay === false && slotType==="week") || (allDay === false && slotType==="date"  ) ){
       startTime = moment(req.body.startTime, "HH:mm");
       endTime = moment(req.body.endTime, "HH:mm");
        slots = [];
      
      while(startTime < endTime){
          slots.push(new moment(startTime).format('HH:mm'));
          startTime.add(req.body.timeDuration, 'minutes').hours();
      }
}


if(allDay === false && slotType==="week"){
  startDay = moment(req.body.startDay, 'ddd');
  endDay = moment(req.body.endDay, 'ddd');
   weekAvailability = [];
   
  while(startDay <= endDay){
     weekAvailability.push(new moment(startDay).format('ddd'));
     startDay.add(1, 'days');
  }
  }

if(allDay === false && slotType==="date"){
  appointmentDate = moment(req.body.appointmentDate, "DD-MM-YYYY").format("DD-MM-YYYY");
  }

}else {
  return res.status(400).send({ status: false, message: "slot is not available" })
}

      let obj =  { 
        doctorId,
        timeDuration,
        weekAvailability :weekAvailability,
        slotType ,
        isAvailable,
        allDay,
        appointmentDate :appointmentDate,
        slots : slots ,
      };

        let savedData = await appointmentModel.create(obj)
        return res.status(201).send({ status : true, msg: savedData })
        
  }
  catch (error) {
    res.status(500).send({ status: false, error: error.message })
  }
  }