const express = require("express");
const route = express.Router();
const { getUser, createUser } = require("../controllers/user.controller.js");

route.get("/", getUser);
route.post("/", createUser);

module.exports = route;
