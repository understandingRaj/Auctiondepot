import React, { useState } from 'react';
import './CSS/leftsidebar.css';

const LeftSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    condition: '',
    category: '',
    location: '',
    color: '',
    fuel: ''
  });

  const handleFilterToggle = (key, value) => {
    const isSameValue = filters[key] === value;
    const updatedFilters = { ...filters, [key]: isSameValue ? '' : value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <>
      <div className='leftsidebar'>
        <div className='condition'>
          <h2>Condition</h2>
          <label>
            <input
              type='checkbox'
              checked={filters.condition === 'used'}
              onChange={() => handleFilterToggle('condition', 'used')}
            />
             Used
          </label>
          <label>
            <input
              type='checkbox'
              checked={filters.condition === 'new'}
              onChange={() => handleFilterToggle('condition', 'new')}
            />
            New
          </label>
        </div>
        <hr />
        <div className='category'>
          <h2>Category</h2>
          <ul>
            <li>
              <label>
                <input
                  type='checkbox'
                  checked={filters.category === 'All'}
                  onChange={() => handleFilterToggle('category', 'All')}
                />
                All Cars
              </label>
            </li>
            <li>
              <label>
                <input
                  type='checkbox'
                  checked={filters.category === 'Premium / Super Car'}
                  onChange={() => handleFilterToggle('category', 'Premium / Super Car')}
                />
                Premium / Super Car
              </label>
            </li>
            <li>
              <label>
                <input
                  type='checkbox'
                  checked={filters.category === 'Vintage Car'}
                  onChange={() => handleFilterToggle('category', 'Vintage Car')}
                />
                Vintage Car
              </label>
            </li>
            <li>
              <label>
                <input
                  type='checkbox'
                  checked={filters.category === 'Taxi'}
                  onChange={() => handleFilterToggle('category', 'Taxi')}
                />
                Taxi
              </label>
            </li>
          </ul>
        </div>
        <hr />
        <div className='Location'>
          <h2>Location</h2>
          <ul>
            {['Pune', 'Punjab', 'Lucknow', 'Delhi', 'Mumbai', 'Jaipur', 'Kolkata', 'Noida', 'Chandigarh', 'Ludhiana', 'Patna', 'Agra'].map((location) => (
              <li key={location}>
                <label>
                  <input
                    type='checkbox'
                    checked={filters.location === location}
                    onChange={() => handleFilterToggle('location', location)}
                  />
                  {location}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className='color'>
          <h2>Exterior Color</h2>
          <ul>
            {['black', 'white', 'blue', 'red', 'silver'].map((color) => (
              <li key={color}>
                <div className={color}></div>
                <label>
                  <input
                    type='checkbox'
                    checked={filters.color === color}
                    onChange={() => handleFilterToggle('color', color)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className='fuel'>
          <h2>Fuel Type</h2>
          <ul>
            {['Petrol', 'Diesel', 'Petrol+CNG', 'CNG', 'LPG', 'Petrol+LPG'].map((fuel) => (
              <li key={fuel}>
                <label>
                  <input
                    type='checkbox'
                    checked={filters.fuel === fuel}
                    onChange={() => handleFilterToggle('fuel', fuel)}
                  />
                  {fuel}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
