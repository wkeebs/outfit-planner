import React, { useState } from 'react';

const Wardrobe = ({ selectedItems, setSelectedItems }) => {
  // Define the list of available items
  const availableItems = {
    'Warm jacket': 'Cold',
    'Scarf': 'Cold',
    'Boots': 'Cold',
    'Light jacket': 'Mild',
    'Jeans': 'Mild',
    'T-shirt': 'Hot',
    'Shorts': 'Hot',
  };

  // Handle checkbox change
  const handleCheckboxChange = (item) => {
    // Check if the item is already selected
    if (selectedItems.includes(item)) {
      // If selected, remove it from the list
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      // If not selected, add it to the list
      setSelectedItems([...selectedItems, item]);
    }
  };
  console.log(selectedItems);
  return (
    <div>
      <h2>Select Items for Your Wardrobe:</h2>
      <ul>
        {Object.keys(availableItems).map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      <h3>Selected Items:</h3>
      <ul>
        {selectedItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wardrobe;



