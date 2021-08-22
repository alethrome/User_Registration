const mongoose = require("mongoose");

const Student = mongoose.Schema({
    lastName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    midName: {
        type: String,
    },
    bDay: {
        type: String,
    },
    gender: {
        type: String,
    },
    studentID: {
        type: String,
    },
    email: {
        type: String,
    },
})

module.exports = mongoose.model("Student", Student);