const express = require("express");
const Location = require("../models/Locations");
const router = express.Router();

// GET all locations from our MONGODB database
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find({});
    res.json(locations);
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
  const { name, identifier } = req.body;
  // TODO: validation goes here
  // Check if location with that identifier already exists
  // https://mongoosejs.com/docs/api.html#query_Query-exists
  const inLocations = await Location.exists({ identifier: identifier });
  console.log(inLocations);
  if (inLocations) {
    return res.status(500).json({
      success: false,
      message: "Location already in DB"
    });
  }
  const newLocation = new Location({
    name,
    identifier
  });
  try {
    const savedLocation = await newLocation.save();
    res.status(201).json({
      success: true,
      message: "New Location added to the database",
      data: savedLocation
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Delete particulat location
router.delete("/delete/:identifier", async (req, res) => {
  const {identifier} = req.params
  try {
    const deletedLocation = await Location.findOneAndDelete({ identifier: identifier })
    if (deletedLocation) {
      res.status(201).json({
        success: true,
        message: "Location deleted from database",
        data: deletedLocation
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Location found"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }

});

module.exports = router;
