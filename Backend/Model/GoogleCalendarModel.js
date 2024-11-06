const mongoose = require("mongoose");

const googleCalendarModel = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },

    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },

    googleCalendarEventId: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("googleCalendarModel", googleCalendarModel);