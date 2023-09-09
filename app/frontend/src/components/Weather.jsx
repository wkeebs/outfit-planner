import { useState } from "react";

function Weather() {
  const weatherAPI = {
    key: "9d697a5570f8189811829f6eefe6e5c9",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPI.key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  function getUserLocation() {
    if (weather === null) {
      return "";
    } else {
      return `${weather.name}, ${weather.sys.country}`;
    }
  }

  function getTemperature() {
    if (weather === null) {
      return "";
    } else {
      return `${weather.main.temp}`;
    }
  }

  function getWeatherType() {
    if (weather === null) {
      return "";
    } else {
      return `${weather.weather[0].main}`;
    }
  }

  return (
    <body class="bg-white p-4 h-screen flex-col justify-center items-center m-8 rounded-2xl shadow-xl hover:shadow-2xl">
      <h1 class="text-3xl text-center font-semibold mb-4">Weather</h1>
      <button onClick={handleLocationClick}>
        {" "}
        Allow Us to access your location so we can design the optimal fit
      </button>

      <div class="flex justify-center items-center h-screen">
        <div class="bg-white p-1 w-full">
          <div class="mb-2">
            Location: <span class="font-bold">{getUserLocation()}</span>
          </div>
          <div class="mb-2">
            Temperature: <span class="font-bold">{getTemperature()}°C</span>
          </div>
          <div class="mb-2">
            Weather: <span class="font-bold">{getWeatherType()}</span>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Weather;
