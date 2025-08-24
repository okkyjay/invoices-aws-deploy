
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/invoices", require("./routes/invoice.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT,  "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
