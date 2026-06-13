// services/weather.js

export async function getWeather(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m,
    rainfall: data.current.rain,
    windSpeed: data.current.wind_speed_10m
  };
}