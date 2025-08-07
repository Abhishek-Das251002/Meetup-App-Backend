const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    startingTime: {
        type: Date,
        required: true,
    },
    endingTime: {
        type: Date,
        required: true,
    },
    hostName: [{
        type: String,
        required: true,
    }],
    eventDetails : {
        type: String,
    },
    eventImgUrl : {
        type: String,
    },
    additionalInfo: {
        type: Map,
        of: String,
    },
    tags: [{
        type: String,
    }],
    address: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    speakers:[{
        name: String,
        designation: String,
        speakerImgUrl: String,
    }],
})


const Event = mongoose.model("Event", eventSchema)

module.exports = Event;
