import React, { useState } from 'react';

const WardrobeChecklist = () => {
  // Initialize state for selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Define the list of available items
  const availableItems = [
    'Hat',
    'Jacket',
    'Jumper',
    'T-shirt',
    'Long-sleeve',
    'Pants',
    'Shorts',
    'Shoes',
    'Thongs',
  ];

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

  return (
    <div>
      <h2>Select Items for Your Wardrobe:</h2>
      <ul>
        {availableItems.map((item) => (
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

export default WardrobeChecklist;

