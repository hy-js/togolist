require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// variables
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin:
    process.env.NODE_ENV == "production"
      ? process.env.HOST
      : `http://localhost:${process.env.CLIENT_PORT}`
};

// middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.send("Route works");
});

app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/locations", require("./routes/locations"));

// Connect to MONGO DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    // console.log(result);
    console.log("Connection to the DB was successful");
    app.listen(PORT, () =>
      console.log(`Your app is listening on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
