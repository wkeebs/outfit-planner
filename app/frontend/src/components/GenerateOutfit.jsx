import React, { useState } from 'react';
import Weather from './Weather';
import Wardrobe from './Wardrobe';

const OutfitGenerator = () => {
  // State for selected items and weather
  const [selectedItems, setSelectedItems] = useState([]);
  const [weather, setWeather] = useState(null);


  const availableItems = {
    'Warm jacket': ['Cold', 'Top'],
    'Scarf': ['Cold', 'Accessory'],
    'Boots': ['Cold', 'Shoe'],
    'Light jacket': ['Mild', 'Layer'],
    'Jeans': ['Hot | Mild', 'Pants'],
    'T-shirt': ['Hot | Mild | Cold', 'Shirt'],
    'Shorts': ['Hot', 'Pants'],
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
      const outfits = {
        'Cold': new Set(),
        'Mild': new Set(),
        'Hot': new Set(),
      };
  
      selectedItems.forEach((item) => {
        const [itemTemperature, clothingCategory] = availableItems[item];
  
        if (itemTemperature.includes('Cold')) {
          outfits['Cold'].add(item);
        }
  
        if (itemTemperature.includes('Mild')) {
          outfits['Mild'].add(item);
        }
  
        if (itemTemperature.includes('Hot')) {
          outfits['Hot'].add(item);
        }
      });
  
      if (temperature < 10) {
        idealOutfit += "For cold weather: ";
        idealOutfit += getRandomItems(outfits['Cold']) + ', ';
      } else if (temperature >= 10 && temperature < 20) {
        idealOutfit += "For mild weather: ";
        idealOutfit += getRandomItems(outfits['Mild']) + ', ';
      } else {
        idealOutfit += "For warm weather: ";
        idealOutfit += getRandomItems(outfits['Hot']) + ', ';
      }
    } else {
      idealOutfit += "Please wait for weather data.";
    }
  
    console.log(idealOutfit);
    alert(idealOutfit);
  };
  
  // Function to get random items from a Set
  const getRandomItems = (itemSet) => {
    const items = Array.from(itemSet);
    const selectedItems = [];
  
    while (items.length > 0) {
      const randomIndex = Math.floor(Math.random() * items.length);
      selectedItems.push(items.splice(randomIndex, 1)[0]);
    }
  
    return selectedItems.join(', ');
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

