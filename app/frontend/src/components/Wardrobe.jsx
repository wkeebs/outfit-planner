import React, { useState } from "react";

const Wardrobe = ({ selectedItems, setSelectedItems, availableItems }) => {
  // Define the list of available items

  // Handle checkbox change
  const handleCheckboxChange = (item) => {
    // Check if the item is already selected
    if (selectedItems.includes(item)) {
      // If selected, remove it from the list
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      // If not selected, add it to the list
      setSelectedItems([...selectedItems, item]);
    }
  };
  console.log(selectedItems);
  return (
    <div class="flex flex-col items-start">
      <h2 class="text-2xl font-semibold mt-4">What Items Do You Own?:</h2>
      <ul class="space-y-2 py-4">
        {Object.keys(availableItems).map((item) => (
          <li key={item} class="pl-2 text-gray-700 w-full">
            <label class="flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-slate-100 rounded-md p-1 text-xl">
              <input
                class="form-checkbox h-5 w-8 text-indigo-600"
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wardrobe;
