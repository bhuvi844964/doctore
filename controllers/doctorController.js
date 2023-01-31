const mongoose = require("mongoose")
const doctorModel = require("../models/doctorModel");
const appointmentModel = require("../models/appointmentModel");

let emailRegex = /^[a-z]{1}[a-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/



module.exports.createProfile = async function (req, res) {
  try {
    let profileImage = req.file
    let data = req.body;
  
    let {fullName,email,phone,password,exprerience,consultationFee,specialization,address,education, gender } = data;

    if (!fullName || fullName == "") {
      return res.status(400).send({ Status: false, message: "Please provide fullName" })
  }
    if (!email || email == "") {
      return res.status(400).send({ Status: false, message: "Please provide email" })
  }
  if (!emailRegex.test(email)) {
    return res.status(400).send({ Status: false, message: "Please enter valid email" })
  }
  if (email) {
    let checkemail = await doctorModel.findOne({ email: email })

    if (checkemail) {
        return res.status(400).send({ Status: false, message: "Please provide another email, this email has been used " })
    }
}
    if (!phone || phone == "") {
      return res.status(400).send({ Status: false, message: "Please provide phone number" })
  }
    if (!password || password == "") {
      return res.status(400).send({ Status: false, message: "Please provide password" })
  }
    if (!exprerience || exprerience == "") {
      return res.status(400).send({ Status: false, message: "Please provide exprerience" })

  }
    if (!consultationFee || consultationFee == "") {
      return res.status(400).send({ Status: false, message: "Please provide consultationFee" })
  }
    if (!specialization || specialization == "") {
      return res.status(400).send({ Status: false, message: "Please provide specialization" })
  }
    if (!address || address == "") {
      return res.status(400).send({ Status: false, message: "Please provide address" })
  }
    if (!education || education == "") {
      return res.status(400).send({ Status: false, message: "Please provide education" })
  }
    if (!gender || gender == "") {
      return res.status(400).send({ Status: false, message: "Please provide gender" })
  }
  if(gender){
    if(!( ["Male", "Female", "Other"].includes(gender))) {
      return res.status(400).send({ Status: false, message: "Gender must be Male , Female and Other " })
    }
}
    if (!profileImage || profileImage == "") {
      return res.status(400).send({ Status: false, message: "Please provide profileImage" })
  }
  if (profileImage.length == 0){
    return res.status(400).send({ status: false, message: "upload profile image" });
 }

 let obj =  { 
      fullName,
      email,
      phone,
      profileImage : profileImage,
      password,
      consultationFee,
      exprerience,
      specialization,
      address,
      education, 
      gender
    };
      let savedData = await doctorModel.create(obj)
      return res.status(201).send({ status : true, msg: savedData })
      
}
catch (error) {
  res.status(500).send({ status: false, error: error.message })
}
}
 

module.exports.login = async function (req, res) {
  try {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || email == "") {
      return res.status(400).send({ Status: false, message: "Please provide email" })
  }
  if (!password || password == "")
      return res.status(400).send({ Status: false, message: "Please provide password to login " })

    let doctor = await doctorModel.findOne({ email });
    let doctorPassword = await doctorModel.findOne({  password });
    if (!doctor)
      return res.status(401).send({
        status: false,
        message: "email  is not corerct",
      });
    if (!doctorPassword)
      return res.status(401).send({
        status: false,
        message: "password  is not corerct",
      });

    res.status(200).send({ status: true, message: " login successful" });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};
 


module.exports.getDoctor = async function (req, res) {
  try {
    let doctorFound = await doctorModel.find(req.query).select({ createdAt: 0, updatedAt: 0, __v: 0});
    if (doctorFound.length > 0) {
      res.status(200).send( doctorFound );
    } else {
        res.status(404).send({ status: false, message: "No such data found " });
    }
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
}; 

 

module.exports.getDoctorById = async function (req, res) {
  try {

    let doctorId = req.params.doctorId;

    if (doctorId) {
      if (!mongoose.isValidObjectId(doctorId))
          return res.status(400).send({ Status: false, message: "Please enter valid doctorId" })
  }
    let doctorFound = await doctorModel.findOne({ _id: doctorId }).select({ createdAt: 0, updatedAt: 0, __v: 0});

        let allappointment = await appointmentModel.findOne({ doctorId: doctorId, isAvailable: true , slotType:"all" , allDay:true  }).select({ createdAt: 0, updatedAt: 0, __v: 0}).lean()
 
        let alldateAppointment = await appointmentModel.findOne({ doctorId: doctorId , isAvailable: true , slotType:"date" , allDay:false  }).select({ createdAt: 0, updatedAt: 0, __v: 0}).lean()

        let allweekappointment = await appointmentModel.findOne({ doctorId: doctorId , isAvailable: true , slotType:"week" , allDay:false  }).select({ createdAt: 0, updatedAt: 0, __v: 0}).lean()


    res.status(200).send({ status: true, message: doctorFound , allappointment ,alldateAppointment , allweekappointment });
 
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  } 
}; 





