const Invoice = require("../models/invoice.model");

exports.createInvoice = async (data) => {
  return await Invoice.create(data);
};

exports.getInvoices = async (page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const invoices = await Invoice.find().skip(skip).limit(limit).sort({ createdAt: -1 });
    const total = await Invoice.countDocuments();
  return {
    data: invoices,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    totalItems: total
  };
};

exports.getInvoiceById = async (id) => {
  return await Invoice.findById(id);
};

exports.updateInvoice = async (id, data) => {
  return await Invoice.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteInvoice = async (id) => {
  return await Invoice.findByIdAndDelete(id);
};
