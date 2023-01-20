const doctoreModel = require("../models/doctoreModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "daffulcrv",
  api_key: "824947271643376",
  api_secret: "IOpD-lHImhBkwf6QJgxbc2Gzx24",
});

module.exports.createProfile = (req, res) => {
  let file = req.files.image;

  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    let data = req.body;

    let {
      fullName,
      email,
      phone,
      password,
      exprerience,
      consultationFee,
      spaseligation,
      address,
      education,
    } = data;

    if (
      !fullName ||
      !email ||
      !phone ||
      !password ||
      !exprerience ||
      !consultationFee ||
      !spaseligation ||
      !address ||
      !education
    ) {
      return res.status(420).send({ message: "Please provide detail" });
    }
    product = new doctoreModel({
      fullName,
      email,
      phone,
      image: result.url,
      password,
      consultationFee,
      exprerience,
      spaseligation,
      address,
      education,
    });
    product
      .save()
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
