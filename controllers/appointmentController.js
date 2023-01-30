const mongoose = require("mongoose")
const doctorModel = require("../models/doctorModel");
const appointmentModel = require("../models/appointmentModel")
const moment = require("moment");



module.exports.appointment = async function (req, res) {
    try {
      let data = req.body;
      let {doctorId,timeDuration,weekAvailability,slotType,isAvailable,allDay,appointmentDate ,slots, startTime ,endTime , startDay , endDay} = data;

      if (!doctorId || doctorId == "")
      return res.status(400).send({ Status: false, message: "Please provide doctorId " })

        if (!mongoose.isValidObjectId(doctorId))
            return res.status(400).send({ Status: false, message: "Please enter valid doctorId " })
    if (!timeDuration || timeDuration == "")
    return res.status(400).send({ Status: false, message: "Please provide timeDuration " })
    if (!appointmentDate || appointmentDate == "")
    return res.status(400).send({ Status: false, message: "Please provide appointmentDate " })
   
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
       startTime = moment(req.body.startTime, "hh:mm A");
       endTime = moment(req.body.endTime, "hh:mm A");
        slots = [];
      while(startTime < endTime){
          slots.push(new moment(startTime).format('LT'));
          startTime.add(req.body.timeDuration, 'minutes').hours();
      }
}

if (allDay === false && slotType==="all"){
  return res.status(400).send({ Status: false, message: " Please set all day true " })  
}
if (allDay === true && slotType==="week"){
  return res.status(400).send({ Status: false, message: " Please set all day false " })  
}
if (allDay === true && slotType==="date"){
  return res.status(400).send({ Status: false, message: " Please set all day false " })  
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

}else {
  return res.status(400).send({ status: false, message: "please check availability" })
}

  if(allDay === false && slotType==="date" ){
     appointmentDate = []
     appointmentDate.push(moment(req.body.appointmentDate, "DD-MM-YYYY").format("DD-MM-YYYY"))
     
      let obj =  { 
        doctorId,
        timeDuration,
        weekAvailability :weekAvailability,
        slotType ,
        isAvailable,
        allDay,
        appointmentDate:appointmentDate,
        slots : slots ,
      };
   
        let savedData = await appointmentModel.create(obj)
        return res.status(201).send({ status : true, msg: savedData })
    }
    else{

      let obj =  { 
        doctorId,
        timeDuration,
        weekAvailability :weekAvailability,
        slotType ,
        isAvailable,
        allDay,
        appointmentDate:'',
        slots : slots ,
      };
   
        let savedData = await appointmentModel.create(obj)
        return res.status(201).send({ status : true, msg: savedData })
    }   
  }
  catch (error) {
    res.status(500).send({ status: false, error: error.message })
  }
  }




  module.exports.getWeekById = async function (req, res) {
    try {
        const doctorId = req.params.doctorId

        if (!mongoose.isValidObjectId(doctorId))
        return res.status(400).send({ Status: false, message: "Please enter valid doctorId " })
    
        let allappointment = await appointmentModel.findOne({ doctorId:doctorId , isAvailable: true , slotType:"week" , allDay:false  }).lean()
        if (!allappointment) {
            return res.status(400).send({ status: false, message: "slot not found" })

        }
        return res.status(200).send({ status: true, message: 'appointment list',data: allappointment })

    } catch (error) {
      res.status(500).send({ status: false, error: error.message });
    }

}

  module.exports.getAlldayById = async function (req, res) {
    try {
        const doctorId = req.params.doctorId

        if (!mongoose.isValidObjectId(doctorId))
        return res.status(400).send({ Status: false, message: "Please enter valid doctorId " })
    
        let allappointment = await appointmentModel.findOne({ doctorId:doctorId , isAvailable: true , slotType:"all" , allDay:true  }).lean()
        if (!allappointment) {
            return res.status(400).send({ status: false, message: "slot not found" })

        }
        return res.status(200).send({ status: true, message: 'appointment list',data: allappointment })

    } catch (error) {
      res.status(500).send({ status: false, error: error.message });
    }

}

  module.exports.getdateById = async function (req, res) {
    try {
        const doctorId = req.params.doctorId

        if (!mongoose.isValidObjectId(doctorId))
        return res.status(400).send({ Status: false, message: "Please enter valid doctorId " })
    
        let allappointment = await appointmentModel.findOne({ doctorId:doctorId , isAvailable: true , slotType:"date" , allDay:false  }).lean()
        if (!allappointment) {
            return res.status(400).send({ status: false, message: "slot not found" })

        }
        return res.status(200).send({ status: true, message: 'appointment list',data: allappointment })

    } catch (error) {
      res.status(500).send({ status: false, error: error.message });
    }

}

