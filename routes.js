"use strict";

// require the express module
const express = require("express");

// create a new Router object
const routes = express.Router();

//connect to the connection file, so we can use the database we made
const pool = require("./connection");
const { response, request } = require("express");
//
routes.get("/results", (req, res) => {
  pool.query("SELECT * FROM quotes").then((response) => {
    res.json(response.rows);
  });
});

routes.get("/stream", (req, res) => {
  pool
    .query("SELECT quote, author FROM quotes ORDER BY RANDOM() LIMIT 20")
    .then((response) => {
      res.json(response.rows);
    });
});

routes.get("/selected", (req, res) => {
  let adjective = req.query.selectedFeeling;
  console.log(adjective);
  if (adjective) {
    pool
      .query(
        `SELECT * FROM quotes WHERE adjective1 = '${adjective}' OR adjective2 = '${adjective}' OR adjective3 = '${adjective}' ORDER BY RANDOM() LIMIT 1`
      )
      .then((response) => {
        res.json(response.rows);
      });
  }
});

// export routes to use in server.js
module.exports = routes;
