const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const appointmentSchema = new mongoose.Schema({
   
    doctorId: {
        type: ObjectId,
        required: true,
        ref: "doctore"
    },
    timeDuration: {
        type: Number,
        required: true,
    },
    weekAvailability: [{
        type: String,
    }],

    startDay: {
        type:String
    },
    endDay: {
        type:String
    },

    slotType: {
        type:String,
        enum:["week", "date", "all" ],
        required: true,
    },
    appointmentDate: [{
        type:String,
        default: ""

    }],
    slots: [{
        type:String,
    }],
    startTime: {
        type:String
    },
    endTime: {
        type:String
    },

    isAvailable: {
        type: Boolean,
        default: false
    },
    allDay: {
        type: Boolean,
        default: false
    },

    startDate: {
        type:String
    },
    endDate: {
        type:String
    },



 
}, { timestamps: true });


module.exports = mongoose.model('appointment', appointmentSchema) 


