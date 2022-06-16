const express = require("express");
const Roll = require("../roll.js");

const router = express.Router();

let rolls = [];

router
  .route("/roll")
  .get((req, res) => {
      res.send(rolls);
  })
  .post((req, res) => {
    let roll = new Roll(req.body.id, req.body.roll);
    rolls.push(roll)
    res.sendStatus(200)
  })

module.exports = router;
