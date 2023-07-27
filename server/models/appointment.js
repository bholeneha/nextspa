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
    enum: ["blow_out", "mani_pedi", "massage"],
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  spaSpecialist: {
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
