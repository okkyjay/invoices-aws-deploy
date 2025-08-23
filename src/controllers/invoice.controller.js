const invoiceService = require("../services/invoice.service");

exports.createInvoice = async (req, res) => {
  try {
    const invoice = await invoiceService.createInvoice(req.body);
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const invoices = await invoiceService.getInvoices(page, limit);
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
