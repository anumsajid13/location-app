const express = require('express');
const Location = require('../models/Location');
const router = express.Router();

router.get('/locations', async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});

router.post('/locations', async (req, res) => {
  const { name, latitude, longitude } = req.body;
  const newLocation = new Location({ name, latitude, longitude });
  await newLocation.save();
  res.json(newLocation);
});

module.exports = router;
