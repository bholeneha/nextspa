require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// connect to database
require("./config/database");

const app = express();
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
