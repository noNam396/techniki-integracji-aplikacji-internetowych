const axios = require("axios");

const getWeather = async (city, apiKey) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  return {
    temperature: res.data.main.temp,
    humidity: res.data.main.humidity,
    source: "openweather"
  };
};

module.exports = { getWeather };
