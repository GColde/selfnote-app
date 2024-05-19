const { ObjectId } = require("mongodb");
const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const router = express.Router();
const client = require("../config/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

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
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        console.log(err);
      }
      const newDoc = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
      };

      const data = await client
        .db("selfnote")
        .collection("users")
        .insertOne(newDoc);
      res.send(data);
    });
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

    const test = bcrypt.compare(
      req.body.password,
      data.password,
      (err, response) => {
        if (err) {
          return res.status(400).send("Somwhere Error inside");
        }
        if (response) {
          res.send({ _id: data._id, token: jwtToken });
        } else {
          return res.status(400).send("Bad pass");
        }
      }
    );
  } catch (err) {
    res.status(400).send("Somwhere catch error");
  }
});

module.exports = router;
