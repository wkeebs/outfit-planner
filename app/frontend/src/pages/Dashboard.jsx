import { useState } from "react"

function Dashboard () {

    const weatherAPI = {
        key: "9d697a5570f8189811829f6eefe6e5c9",
        base: "https://api.openweathermap.org/data/2.5/",
    }

    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null)

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
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPI.key}&units=metric`)
        .then(response => response.json())
        .then(data => {
        setWeather(data);
        console.log(data);
        })
        .catch(error => console.log(error));
    }

      function error() {
        console.log("Unable to retrieve your location");
    }



    return(
        <div>
            <button onClick={handleLocationClick}> Allow Us to access your location so we can design the optimal fit</button>
        </div>
    )


}

export default Dashboard