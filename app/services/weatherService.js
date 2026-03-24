const openWeather = require("./providers/openWeather");
const weatherApi = require("./providers/weatherApi");
const openMeteo = require("./providers/openMeteo");

const safeCall = async (fn) => {
  try {
    return await fn;
  } catch {
    return null;
  }
};

const getAggregatedWeather = async (city) => {
  const results = (await Promise.all([
    safeCall(openWeather.getWeather(city, process.env.OPENWEATHER_API_KEY)),
    safeCall(weatherApi.getWeather(city, process.env.WEATHER_API_KEY)),
    safeCall(openMeteo.getWeather(city))
  ])).filter(Boolean);

  const avgTemp =
    results.reduce((sum, r) => sum + r.temperature, 0) / results.length;

  const avgHumidity =
    results.reduce((sum, r) => sum + r.humidity, 0) / results.length;

  return {
    city,
    temperature: Math.round(avgTemp),
    humidity: Math.round(avgHumidity),
  };
};

module.exports = { getAggregatedWeather };
