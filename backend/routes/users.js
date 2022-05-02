const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");

// GET all users in our database
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get random user
router.get("/random", async (req, res) => {
  try {
    const random = await User.aggregate([{ $sample: { size: 1 } }]);
    res.json(random);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// POST new user to DB
router.post("/add", async (req, res) => {
  const { username, email, password } = req.body;
  // TODO: validation
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(500).json({
      success: false,
      message: "User already in DB",
      data: user
    });
  }

  const cleanedEmail = email.trim().toLowerCase();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  const newUser = new User({
    username,
    email: cleanedEmail,
    password: hash
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      message: "New user has been saved to the DB",
      data: savedUser
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
