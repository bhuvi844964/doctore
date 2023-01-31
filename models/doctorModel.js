const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female" , "Other"]
    },
    profileImage: {
      type : [],

    },
    consultationFee: {
      type: Number,
      required: true,
    },
    exprerience: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
      uppercase:true
    },
    address: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
      uppercase: true,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("doctor", doctorSchema);
