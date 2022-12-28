const API_KEY = 'a8ccb837b2a0a6ae2088b8628927d9b3';

const weatherDataFormatted = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const weatherIconURL = (iconId) =>
    `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  const data = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data);
  console.log(data);

  // Weather Data destructuring
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];

  return {
    description,
    iconURL: weatherIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { weatherDataFormatted };
