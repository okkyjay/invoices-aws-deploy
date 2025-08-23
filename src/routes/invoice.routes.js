const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoice.controller");

router.post("/", invoiceController.createInvoice);
router.get("/", invoiceController.getInvoices);

module.exports = router;
