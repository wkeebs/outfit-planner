import React, { useState } from 'react';
import Weather from './Weather';
import Wardrobe from './Wardrobe';

const OutfitGenerator = () => {
  // State for selected items and weather
  const [selectedItems, setSelectedItems] = useState([]);
  const [weather, setWeather] = useState(null);


  const availableItems = {
    'Warm jacket': 'Cold',
    'Scarf': 'Cold',
    'Boots': 'Cold',
    'Light jacket': 'Mild',
    'Jeans': 'Hot | Mild',
    'T-shirt': 'Hot | Mild | Cold',
    'Shorts': 'Hot',
  };
  // Function to generate an ideal outfit based on selected items and weather
  const generateOutfit = () => {
    console.log(selectedItems);
  
    // Check if there are selected items
    if (selectedItems.length === 0) {
      alert('Please select some clothing items.');
      return;
    }
  
    // Logic to determine the outfit based on the filteredItems and weather.temperature
    let idealOutfit = "Your ideal outfit is: ";
    
    let temperature = weather.main.temp;
    console.log(temperature);
  
    if (weather && temperature) {
      if (temperature < 10) {
        // Filter selected items for cold weather
        const coldWeatherItems = selectedItems.filter((item) => availableItems[item].includes('Cold'));
        idealOutfit += "For cold weather: " + coldWeatherItems.join(', ');
      } else if (temperature >= 10 && temperature < 20) {
        // Filter selected items for mild weather
        const mildWeatherItems = selectedItems.filter((item) => availableItems[item].includes('Mild'));
        idealOutfit += "For mild weather: " + mildWeatherItems.join(', ');
      } else {
        // Filter selected items for warm weather
        const hotWeatherItems = selectedItems.filter((item) => availableItems[item].includes('Hot'));
        idealOutfit += "For warm weather: " + hotWeatherItems.join(', ');
      }
    } else {
      idealOutfit += "Please wait for weather data.";
    }
    console.log(idealOutfit)
    alert(idealOutfit);
  };
  

  return (
    <div className="flex justify-center h-screen w-full">
      <div className="w-1/3 px-4 shadow-2xl h-5/6 rounded-2xl mr-4">
        <Wardrobe selectedItems={selectedItems} setSelectedItems={setSelectedItems} availableItems={availableItems} />
      </div>
      <div class="w-1/2 px-4 flex flex-col justify-end items-center h-5/6 bg-black bg-opacity-10 rounded-2xl shadow-xl">
        <button onClick={generateOutfit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold my-8 py-2 px-4 rounded w-2/3 shadow-xl">
          Generate my outfit!
        </button>
      </div>
      <div className="w-1/3 px-4 h-5/6">
        <Weather weather={weather} setWeather={setWeather} />
      </div>
    </div>
  );
};

export default OutfitGenerator;

