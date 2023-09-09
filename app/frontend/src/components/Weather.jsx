import { useState, useEffect } from "react";

function Weather() {
  const weatherAPI = {
    key: "9d697a5570f8189811829f6eefe6e5c9",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });

    fetch(
      `${weatherAPI.base}weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPI.key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  function getUserLocation() {
    return weather ? `${weather.name}, ${weather.sys.country}` : "";
  }

  function getTemperature() {
    return weather ? `${weather.main.temp}°C` : "";
  }

  function getWeatherType() {
    return weather ? `${weather.weather[0].main}` : "";
  }

  return (
    <div className="bg-white p-4 flex-col justify-around items-center rounded-2xl shadow-xl hover:shadow-2xl h-full transition duration-700">
      <h1 className="text-3xl text-center font-semibold h-1/5">Weather</h1>
      <div className="h-4/5 p-1 w-full text-center uppercase space-y-8 place-content-center">
        <div className="w-full flex place-content-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios/100/cloud--v1.png"
            alt="cloud--v1"
          />
        </div>
        <div className="text-center">
          <span className="text-xl">{getUserLocation()}</span>
        </div>
        <div className="text-center">
          <span className="text-4xl truncate">{getTemperature()}</span>
        </div>
        <div className="text-center mt-[-0.5rem]">
          <span className="text-lg">{getWeatherType()}</span>
        </div>
      </div>
    </div>
  );

}

export default Weather;
