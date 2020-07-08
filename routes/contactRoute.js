const Route = require("express").Router();
const { sendEmail } = require("../controllers/contactController");

Route.post("/", sendEmail);

module.exports = Route;