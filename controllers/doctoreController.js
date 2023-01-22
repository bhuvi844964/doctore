const doctoreModel = require("../models/doctoreModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "daffulcrv",
  api_key: "824947271643376",
  api_secret: "IOpD-lHImhBkwf6QJgxbc2Gzx24",
});


let emailRegex = /^[a-z]{1}[a-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/


module.exports.createProfile = (req, res) => {
  let file = req.files.profileImage;

  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    let data = req.body;

    let {fullName,email,phone,password,exprerience,consultationFee,specialization,address,education} = data;

  if (!fullName || fullName == "") {
    return res.status(400).send({ Status: false, message: "Please provide fullName" })
}
  if (!email || email == "") {
    return res.status(400).send({ Status: false, message: "Please provide email" })
}
if (!emailRegex.test(email)) {
  return res.status(400).send({ Status: false, message: "Please enter valid email" })
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
 let obj =  {
      fullName,
      email,
      phone,
      profileImage: result.url,
      password,
      consultationFee,
      exprerience,
      specialization,
      address,
      education,
    };
    let savedData =  doctoreModel.create(obj)
      .then((result) => {
        res.status(201).send({
          message: "success",
          result,
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: "failure",
          error,
        });
      });
  });
};

module.exports.login = async function (req, res) {
  try {
    let email = req.body.email;
    let password = req.body.password;
    if ( !email || !password) {
      return res.status(420).send({ message: "Please provide detail" });
    }
    let doctore = await doctoreModel.findOne({ email, password });
    if (!doctore)
      return res.status(401).send({
        status: false,
        msg: "email or the password is not corerct",
      });

    res.status(200).send({ status: true, msg: " login successful" });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};
 


module.exports.getDoctore = async function (req, res) {
  try {
    let doctoreFound = await doctoreModel.find(req.query);
    res.status(200).send({ status: true, message: doctoreFound });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};
