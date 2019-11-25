// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");

// const port = 3000;
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

// MIDDLEWARE
const whitelist = ["http://localhost:3001", "*"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(methodOverride("_method"));
// static files middleware
app.use(express.static(__dirname + "/public"));

// CONTROLLERS
const boozController = require("./controllers/booz.js");
app.use("/booz", boozController);
const Booz = require("./models/boozModel.js");

app.get("/", (req, res) => {
  Booz.find({}, (error, allBooz) => {
    if (error) {
      res.send(error);
    } else {
      res.send(allBooz);
      // {
      //   res.render("index.ejs", {
      //     Bookmarks: allBookmarks
      // });
    }
  });
});
// SEED ROUTE
const boozSeed = require("./models/boozSeed.js");

app.get("/boozSeed", (req, res) => {
  // seeds the data
  Booz.create(boozSeed, (err, createdBoozItems) => {
    console.log("In boozSeed");
    console.log("createdBoozItems =>", createdBoozItems);

    res.redirect("/");
  });
});

//put this above your show.ejs file
// app.get("/new", (req, res) => {
//   console.log("In display new page");
//   res.render("new.ejs");
// });

// CONNECTIONS
app.listen(PORT, () => {
  console.log("listening on PORT: ", PORT);
});

//for Heroku Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/booz";

// mongoose.connect("mongodb://localhost:27017/booz");
// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log("connected to mongo database");
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
