const axios = require("axios");

const getWeather = async (city, apiKey) => {
  const res = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
  );

  return {
    temperature: res.data.current.temp_c,
    humidity: res.data.current.humidity,
    source: "weatherapi"
  };
};

module.exports = { getWeather };
