import React, { useState } from 'react';
import Weather from './Weather';
import Wardrobe from './Wardrobe';
import hatImg from '../images/hats/hat1.jpg'
import WjacketImg from '../images/jackets/jacket1.jpg'
import LjacketImg from '../images/jackets/jacket2.jpg'
import shirtImg from '../images/shirts/shirt3.jpg'
import LshirtImg from '../images/shirts/shirt2.jpg'
import shoeImg from '../images/shoes/shoes1.jpg'
import jeansImg from '../images/pants/pants3.jpg'
import shortsImg from '../images/pants/pants2.jpg'
import axios from 'axios';
const OutfitGenerator = async () => {





  let ClothingObject = [
		{

			name: "Clothing",
			sub: ["Shirts & Tops",
				"Shorts",
				"Swimwear",
				"Pants",
				"Jeans",
				"Underwear",
				"Activewear"]
		},

		{

			name: "Shoes",
			sub: ["Sneakers & Athletic",
				    "Sandals",
				    "Running Shoes",
				    "Oxfords",
				    "Loafers",
				    "Clogs",
				    "Boots",
				    "Wide"
,]
		}

  ]

  let fit = [
    {
      name:"Middle",
      options: [
        ["Shoes","Sneakers & Athletic"],
        ["Shoes","Sandals"],
        ["Shoes","Running Shoes"],
        ["Shoes","Oxfords"],
        ["Shoes","Loafers"],
        ["Shoes","Clogs"],
        ["Shoes","Boots"],
        ["Shoes","Wide"],
      ]
    },
    {
      name:"Bottom",
      options: [
        ["Clothing",""],
        ["Clothing",""],
        ["Clothing",""],
        ["Clothing",""],
        ["Clothing",""]
      ]
    },
    {
      name:"Shoes",
      options: [
        ["Shoes","Sneakers & Athletic"],
        ["Shoes","Sandals"],
        ["Shoes","Running Shoes"],
        ["Shoes","Oxfords"],
        ["Shoes","Loafers"],
        ["Shoes","Clogs"],
        ["Shoes","Boots"],
        ["Shoes","Wide"],
      ]
    }
  ]
  

 

 


  // State for selected items and weather
  const [selectedItems, setSelectedItems] = useState([]);
  const [weather, setWeather] = useState(null);

  const availableItems = {
    'Middle': ['Cold', 'Shoes', shoeImg],
    'Bottom': ['Hot | Mild', 'Pants', jeansImg],
    'Shoes': ['Hot | Mild | Cold', 'Shirts & Tops', shirtImg],
    'Shorts': ['Hot', 'Pants', shortsImg],
  };

  let Outfit = new Set();
  let imgArray = [];



  // Function to generate an ideal outfit based on selected items and weather
  const generateOutfit = () => {

    // Check if there are selected items
    if (selectedItems.length === 0) {
      alert('Please select some clothing items.');
      return;
    }

    // Logic to determine the outfit based on the filteredItems and weather.temperature
    let idealOutfit = "";

    let temperature = weather.main.temp;

    if (weather && temperature) {
      const outfits = {
        'Cold': new Set(),
        'Mild': new Set(),
        'Hot': new Set(),
      };

      selectedItems.forEach((item) => {
        const [itemTemperature, clothingCategory, itemImage] = availableItems[item];

        if (itemTemperature.includes('Cold')) {
          outfits['Cold'].add(item);
        }

        if (itemTemperature.includes('Mild')) {
          outfits['Mild'].add(item);
        }

        if (itemTemperature.includes('Hot')) {
          outfits['Hot'].add(item);
        }

        // Add the item image URL to imgArray
        imgArray.push(itemImage);
      });

      let piece;
      if (temperature < 10) {
        piece = getRandomItems(outfits['Mild'])
        idealOutfit += piece + ', ';
        Outfit.add(piece)

      } else if (temperature >= 10 && temperature < 20) {
        piece = getRandomItems(outfits['Mild'])
        idealOutfit += piece + ', ';
        Outfit.add(piece)
      } else {

        piece = getRandomItems(outfits['Mild'])
        idealOutfit += piece + ', ';
        Outfit.add(piece)
      }
    } else {
      idealOutfit += "Please wait for weather data.";
    }

    idealOutfit = idealOutfit.slice(0, -2);
    console.log(idealOutfit);
    
  };


  const axios = require('axios');

  
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


  async function arrayGet(optionsArray) {
    const axios = require('axios');

    const options = {
      method: 'POST',
      url: 'https://zappos1.p.rapidapi.com/products/list',
      params: {
        page: '1',
        limit: '100',
        sort: 'relevance/desc'
      },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'fefc42817bmshae46748d4188e19p1f133ejsn9ba26ec46429',
        'X-RapidAPI-Host': 'zappos1.p.rapidapi.com'
      },
      data: [
        {
          facetField: 'zc1',
          values: [optionsArray[0]]
        },
        {
          facetField: 'zc2',
          values: [
            optionsArray[1]
          ]
        },
        {
          facetField: 'txAttrFacet_Gender',
          values: ['Women', 'Girls']
        }
      ]
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  



  return (
    <div className="flex justify-center h-screen w-full">
      <div className="w-1/3 px-4 shadow-2xl h-5/6 rounded-2xl mr-4">
        <Wardrobe selectedItems={selectedItems} setSelectedItems={setSelectedItems} availableItems={availableItems} />
      </div>
      <div className="w-1/2 px-4 flex flex-col justify-end items-center h-5/6 bg-black bg-opacity-10 rounded-2xl shadow-xl">
        <button onClick={generateOutfit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold my-8 py-2 px-4 rounded w-2/3 shadow-xl">
          Generate my outfit!
        </button>

        {/* Render the images associated with each item in imgArray */}
        <div>
          {imgArray.map((itemImage, index) => (
            <img
              key={index}
              src={itemImage}
              alt={"outfit item"}
              className="w-40 h-40"
            />
          ))}
        </div>

      </div>
      <div className="w-1/3 px-4 h-5/6">
        <Weather weather={weather} setWeather={setWeather} />
      </div>
    </div>
  );
};

export default OutfitGenerator;

