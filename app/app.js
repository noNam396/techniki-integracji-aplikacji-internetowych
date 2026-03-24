require("dotenv").config();
const express = require("express");
const path = require("path");

const weatherRoutes = require("./routes/weather");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
