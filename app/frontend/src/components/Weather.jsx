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
      return `${weather.main.temp}°C`;
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
    <body class="bg-white p-4 flex-col justify-around items-center rounded-2xl shadow-xl hover:shadow-2xl h-full">
      <h1 class="text-3xl text-center font-semibold h-1/5">Weather</h1>
      <div class="h-4/5 p-1 w-full text-center uppercase space-y-8 place-content-center">
        <div class="w-full flex place-content-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios/100/cloud--v1.png"
            alt="cloud--v1"
          />
        </div>
        <div class="">
          <span class="text-2xl">{getUserLocation()}</span>
        </div>
        <div class="">
          <span class="text-6xl truncate">{getTemperature()}</span>
        </div>
        <div class="">
          <span class="text-2xl">{getWeatherType()}</span>
        </div>
      <button onClick={handleLocationClick}>
        {" "}
        Allow Us to access your location so we can design the optimal fit
      </button>
      </div>
    </body>
  );
}

export default Weather;
