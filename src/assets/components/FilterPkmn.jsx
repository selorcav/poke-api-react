// FilterPkmn.jsx
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const types = [
  'normal', 'fire', 'water', 'grass', 'electric', 'ground', 'rock', 'flying',
  'poison', 'bug', 'fighting', 'psychic', 'dark', 'fairy', 'steel', 'dragon',
  'ghost', 'ice'
];

export const FilterPkmn = ({ getTypeColor, onFilterChange }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <>
      <div className='flex flex-wrap justify-center'>
        {types.map((type, index) => (
          <div key={index} className={`flex items-center ${getTypeColor(type)}-200  mx-1 rounded-lg mb-2`}>
            <Checkbox
              {...label}
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckboxChange(type)}
            />
            <span className="mx-1 p-1 text-sm afacad-600">{type.toUpperCase()}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-8/12 md:w-4/12 mx-auto">
        <Button size='large' fullWidth className='px-5' onClick={() => onFilterChange(selectedTypes)} variant="contained">Filtrar</Button>
      </div>
    </>

  );
};
