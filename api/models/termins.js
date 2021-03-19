const mongoose = require('mongoose');

const terminsSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            required: "date must be entered"
        },
        name:{
            type: String,
            required: "You must enter name"
        },
        time: {
            type: String,
            required: "You must enter time"
        },
        phoneNumber: {
            type: String,
            required: "You must enter number"
        },
        accepted: {
            type: Boolean,
            default: false
        }
    }
);


const Termins = mongoose.model("Termin", terminsSchema);

module.exports = Termins;
