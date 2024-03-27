import React from 'react';
import { TextField } from '@mui/material';

export const SearchPkmn = ({ onSearchChange }) => {
  const handleInputChange = (event) => {
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  };

  return (
    <>
      <div className="my-4 mx-8">
        <TextField className='my-8' fullWidth label="Search a Pokemon ..." id="fullWidth" onChange={handleInputChange} />
      </div>
    </>
  )
}
