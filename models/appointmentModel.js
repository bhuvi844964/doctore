const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const appointmentSchema = new mongoose.Schema({
   
    doctoreId: {
        type: ObjectId,
        required: true,
        ref: "doctore"
    },
    timeDuration: {
        type: String,
        required: true,
    },
    weekAvailability: {
        type: String,
        default: []
    },
    sloteType: [{
        type:String,
        enum:["weekAvailability", "appointmentDate", "allDay" ]
    }],
    appointmentDate: {
        type:String,
        default: ""
    },
   timeSlote: [{
        type:String,
    }],
    isAvailable: {
        type: Boolean,
        default: false
    },
    allDay: {
        type: Boolean,
        default: false
    },
 
}, { timestamps: true });


module.exports = mongoose.model('appointment', appointmentSchema) 