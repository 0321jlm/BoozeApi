const express = require("express");
const booz = express.Router();
const Booz = require("../models/boozModel");

booz.get("/", (req, res) => {
  Booz.find({}, (err, foundBooz) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundBooz);
  });
});

booz.post("/", (req, res) => {
  Booz.create(req.body, (error, createdBooz) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdBooz);
  });
});

booz.delete("/:id", (req, res) => {
  Booz.findByIdAndRemove(req.params.id, (err, deletedBooz) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedBooz);
  });
});

booz.put("/:id", (req, res) => {
  Booz.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBooz) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedBooz);
    }
  );
});

module.exports = booz;
