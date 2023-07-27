const mongoose = require("mongoose");

// Define Appointment Model
const appointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  with: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

// Create Appointment Model
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
