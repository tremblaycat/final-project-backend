"use strict";

// require the express module
const express = require("express");

// create a new Router object
const routes = express.Router();

//connect to the connection file, so we can use the database we made
const pool = require("./connection");
const { response } = require("express");

///////WRITE FUNCTIONS HERE

// export routes to use in server.js
module.exports = routes;
