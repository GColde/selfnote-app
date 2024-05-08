const { ObjectId } = require("mongodb");
const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const router = express.Router();
const client = require("../config/db");

router.get("/users", async (req, res) => {
  try {
    const data = await client
      .db("selfnote")
      .collection("users")
      .find()
      .toArray();
    res.send(data);
  } catch (err) {
    return res.status(500).send({ err });
  }
});

// register
router.post("/user/register", async (req, res) => {
  try {
    const newDoc = req.body;
    const data = await client
      .db("selfnote")
      .collection("users")
      .insertOne(newDoc);
    res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

// login
router.post("/user/login", async (req, res) => {
  try {
    const data = await client
      .db("selfnote")
      .collection("users")
      .findOne({ email: req.body.email });

    const jwtToken = jwt.sign(
      {
        id: data._id,
        email: data.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3600000" }
    );

    if (data.password != req.body.password) {
      res.status(400).send("Wrong login info pass");
    } else {
      res.send({ email: data.email, token: jwtToken });
    }
  } catch (err) {
    res.status(400).send("Wrong login info email");
  }
});

module.exports = router;
