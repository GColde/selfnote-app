const { ObjectId } = require("mongodb");
const express = require("express");
require("dotenv").config();

const router = express.Router();
const client = require("../config/db");

// Retrun users recipes
// router.post("", async (req, res) => {
//   try {
//     const userId = new ObjectId(req.body.userId);
//     const filter = { userId: new ObjectId(userId) };
//     const data = await client
//       .db("selfnote")
//       .collection("recipes")
//       .find(filter)
//       .toArray();

//     res.send(data);
//   } catch (err) {
//     return res.status(500).send({ err });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const userId = new ObjectId(req.body.userId);
//     const time = String(req.body.time);
//     console.log(time);
//     if (time == "Any") {
//       const filter = { userId: new ObjectId(userId) };
//       const data = await client
//         .db("selfnote")
//         .collection("recipes")
//         .find(filter)
//         .toArray();
//       res.send(data);
//     } else {
//       const filter = { userId: new ObjectId(userId), time };
//       const data = await client
//         .db("selfnote")
//         .collection("recipes")
//         .find(filter)
//         .toArray();
//       res.send(data);
//     }
//   } catch (err) {
//     return res.status(500).send({ err });
//   }
// });

// Retrun users recipes by time
router.post("/", async (req, res) => {
  try {
    const userId = new ObjectId(req.body.userId);
    const time = String(req.body.time);
    if (time == "Any") {
      const filter = { userId: new ObjectId(userId) };
      const data = await client
        .db("selfnote")
        .collection("recipes")
        .find(filter)
        .toArray();
      res.send(data);
    } else {
      const filter = { userId: new ObjectId(userId), time };
      const data = await client
        .db("selfnote")
        .collection("recipes")
        .find(filter)
        .toArray();
      res.send(data);
    }
  } catch (err) {
    return res.status(500).send({ err });
  }
});

// Deletes task of the day
router.delete("/:recipeId", async (req, res) => {
  try {
    const { recipeId } = req.params;
    const filter = { _id: new ObjectId(recipeId) };
    console.log("asd");
    const data = await client
      .db("selfnote")
      .collection("recipes")
      .deleteOne(filter);

    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

// Create new task
router.post("/newRecipe", async (req, res) => {
  try {
    const data = await client
      .db("selfnote")
      .collection("recipes")
      .insertOne({
        ...req.body,
        userId: new ObjectId(req.body.userId),
      });

    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
});

// Return by recipe id
router.post("/change", async (req, res) => {
  try {
    const userId = new ObjectId(req.body.userId);
    const filter = { _id: new ObjectId(userId) };
    const data = await client
      .db("selfnote")
      .collection("recipes")
      .find(filter)
      .toArray();

    res.send(data);
  } catch (err) {
    return res.status(500).send({ err });
  }
});

//Returns day tasks for task component

// router.post("/V2/day", async (req, res) => {
//   try {
//     const userId = new ObjectId(req.body.userId);
//     const year = req.body.year;
//     const month = req.body.month;
//     const day = req.body.day;

//     const filter = { userId: new ObjectId(userId), year, month, day };
//     const data = await client
//       .db("selfnote")
//       .collection("daylogsV2")
//       .find(filter)
//       .toArray();

//     res.send(data);
//   } catch (err) {
//     return res.status(500).send({ err });
//   }
// });

module.exports = router;
