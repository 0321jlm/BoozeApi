// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// const port = 3000;
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
// body parser middleware

app.use(express.json());
app.use(methodOverride("_method"));
// static files middleware
app.use(express.static(__dirname + "/public"));

// CONTROLLERS
// const showController = require("./controllers/show.js");
// app.use("/show", showController);

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
const Booz = require("./models/boozModel.js");
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
