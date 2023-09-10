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

    // Rest of your generateOutfit function remains the same
    // ...

    // Rest of your generateOutfit function remains the same
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
        <Weather setWeather={setWeather} />
      </div>
    </div>
  );
};

export default OutfitGenerator;

