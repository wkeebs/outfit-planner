import React, { useState, useEffect } from "react";

function Weather() {
  const weatherAPI = {
    key: "9d697a5570f8189811829f6eefe6e5c9",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false); // Data has been loaded
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Data loading failed
      });
  }

  function error() {
    console.log("Unable to retrieve your location");
    setLoading(false); // Data loading failed
  }

  function getUserLocation() {
    return weather ? `${weather.name}, ${weather.sys.country}` : "";
  }

  function getTemperature() {
    return weather ? `${weather.main.temp}°C` : "";
  }

  function getWeatherType() {
    return weather ? `${weather.weather[0].description}` : "";
  }

  function getWeatherIcon() {
    return weather ? `${weather.weather[0].icon}` : "";
  }

  // Conditional rendering based on loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 p-4 rounded-2xl shadow-xl hover:shadow-2xl h-full text-white transition duration-700">
      <h1 className="text-3xl font-semibold text-center">Weather</h1>
      <div className="flex flex-col items-center justify-center h-4/5 space-y-8">
        <img
          src={`https://openweathermap.org/img/wn/${getWeatherIcon()}@2x.png`}
          alt="Weather Icon"
          className="w-24 h-24"
        />
        <div className="text-xl">{getUserLocation()}</div>
        <div className="text-xl truncate">{getTemperature()}</div>
        <div className="mt-[-0.5rem] text-lg">{getWeatherType()}</div>
      </div>
    </div>
  );
}

export default Weather;
