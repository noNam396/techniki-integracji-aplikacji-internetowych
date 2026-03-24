const express = require("express");
const router = express.Router();
const { getAggregatedWeather } = require("../services/weatherService");

router.get("/:city", async (req, res) => {
  try {
    const data = await getAggregatedWeather(req.params.city);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching weather" });
  }
});

module.exports = router;
