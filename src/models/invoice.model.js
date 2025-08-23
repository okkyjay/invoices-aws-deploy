const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ["pending", "paid"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Invoice", InvoiceSchema);