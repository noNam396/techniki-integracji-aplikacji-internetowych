const axios = require("axios");

const getWeather = async (city) => {
  const geo = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );

  const { latitude, longitude } = geo.data.results[0];

  const res = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`
  );

  return {
    temperature: res.data.current.temperature_2m,
    humidity: res.data.current.relative_humidity_2m,
    source: "open-meteo"
  };
};

module.exports = { getWeather };
