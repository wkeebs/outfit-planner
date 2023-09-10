import React, { useState } from 'react';
import Weather from './Weather';
import Wardrobe from './Wardrobe';

const OutfitGenerator = () => {
  // State for selected items and weather
  const [selectedItems, setSelectedItems] = useState([]);
  const [weather, setWeather] = useState(null);

  // Function to generate an ideal outfit based on selected items and weather
  const generateOutfit = () => {
    console.log(selectedItems);

    console.log(selectedItems)
    // Check if there are selected items
    if (selectedItems.length === 0) {
      alert('Please select some clothing items.');
      return;
    }

    // Logic to determine the outfit based on the filteredItems and weather.temperature
    let idealOutfit = "Your ideal outfit is: ";
    
    let temperature = weather.main.temp

    if (weather && temperature) {
      if (temperature < 10) {
        // Customize this logic based on your outfit recommendations
        idealOutfit += "For cold weather: " + selectedItems.filter('Cold');
      } else if (temperature >= 10 && temperature < 20) {
        // Customize this logic based on your outfit recommendations
        idealOutfit += "For mild weather: " + selectedItems.join('Mild');
      } else {
        // Customize this logic based on your outfit recommendations
        idealOutfit += "For warm weather: " + selectedItems.join('Hot');
      }
    } else {
      idealOutfit += "Please wait for weather data.";
    }
    console.log(idealOutfit)
    alert(idealOutfit);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 px-4">
        <Wardrobe selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      </div>
      <div className="w-1/2 px-4">
        <button onClick={generateOutfit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Generate my outfit!
        </button>
      </div>
      <div className="w-1/2 px-4">
        <Weather weather={weather} setWeather={setWeather} />
      </div>
    </div>
  );
};

export default OutfitGenerator;

