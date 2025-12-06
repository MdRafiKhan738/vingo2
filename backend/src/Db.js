const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000
    });

    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB Error =>", error.message);
    throw error; // THIS IS IMPORTANT FOR VERCEL
  }
};

module.exports = connectdb;
