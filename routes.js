"use strict";

// require the express module
const express = require("express");

// create a new Router object
const routes = express.Router();

//connect to the connection file, so we can use the database we made
const pool = require("./connection");
const { response } = require("express");
//
routes.get("/quotes", (req, res) => {
  pool.query("SELECT * FROM quotes").then((response) => {
    res.json(response.rows);
  });
});

// export routes to use in server.js
module.exports = routes;
