const { ObjectId } = require("mongodb");
const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const router = express.Router();
const client = require("../config/db");

router.post("/", async (req, res) => {
  try {
    const data = await client
      .db("selfnote")
      .collection("calendar")
      .findOne({ email: req.body.email });
    res.send(data);
  } catch (err) {
    return res.status(500).send({ err });
  }
});

// router.get("/calendar", async (req, res) => {
//   try {
//     const data = await client
//       .db("selfnote")
//       .collection("users")
//       .find()
//       .toArray();
//     res.send(data);
//   } catch (err) {
//     return res.status(500).send({ err });
//   }
// });

module.exports = router;
