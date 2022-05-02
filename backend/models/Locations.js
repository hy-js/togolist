const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationSchema = new Schema(
  {
    name: { type: String, required: true },
    identifier: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
