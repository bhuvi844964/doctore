const doctorModel = require("../models/doctorModel");

const mongoose = require("mongoose")
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
      return res.status(400).send({ Status: false, message: "You have to provide password to login " })

    let doctore = await doctorModel.findOne({ email });
    let doctorepPassword = await doctorModel.findOne({  password });
    if (!doctore)
      return res.status(401).send({
        status: false,
        msg: "email  is not corerct",
      });
    if (!doctorepPassword)
      return res.status(401).send({
        status: false,
        msg: "password  is not corerct",
      });

    res.status(200).send({ status: true, msg: " login successful" });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};
 


module.exports.getDoctor = async function (req, res) {
  try {
    let doctoreFound = await doctorModel.find(req.query);
    if (doctoreFound.length > 0) {
      res.status(200).send({ status: true, message: doctoreFound });
    } else {
        res.status(404).send({ status: false, message: "No such data found " });
    }
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
}; 

 

module.exports.getDoctorById = async function (req, res) {
  try {
    if (req.params._id) {
      if (!mongoose.isValidObjectId(req.params._id))
          return res.status(400).send({ Status: false, message: "Please enter valid _id" })
  }
    let doctoreFound = await doctorModel.findById(req.params);
      res.status(200).send({ status: true, message: doctoreFound });
   
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
}; 





