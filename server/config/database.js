const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectDatabase();
