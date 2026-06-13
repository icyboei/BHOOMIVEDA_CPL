export async function fetchFarmWeather(lat, lon) {
  const url = new URL(
    "https://api.open-meteo.com/v1/forecast"
  );

  url.searchParams.set("latitude", lat);
  url.searchParams.set("longitude", lon);

  url.searchParams.set(
    "current",
    [
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation",
      "rain",
      "surface_pressure",
      "wind_speed_10m",
      "wind_direction_10m",
      "cloud_cover"
    ].join(",")
  );

  const response = await fetch(url);
  const data = await response.json();

  return {
    temperature:
      data.current.temperature_2m,

    humidity:
      data.current.relative_humidity_2m,

    rainfall:
      data.current.rain,

    precipitation:
      data.current.precipitation,

    pressure:
      data.current.surface_pressure,

    windSpeed:
      data.current.wind_speed_10m,

    windDirection:
      data.current.wind_direction_10m,

    cloudCover:
      data.current.cloud_cover
  };
}