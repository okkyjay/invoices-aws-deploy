const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://okeayodejia:Krr0Oy50krBlZP42@cluster0.hnf6lad.mongodb.net/invoices?retryWrites=true&w=majority&appName=Cluster0');
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
