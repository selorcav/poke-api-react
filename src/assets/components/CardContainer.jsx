// CardContainer.jsx
import React, { useState, useEffect } from 'react';
import { CardPkmn } from './CardPkmn';
import { FilterPkmn } from './FilterPkmn';
import { SearchPkmn } from './SearchPkmn';

const getTypeColor = (type) => {
  switch (type) {
    case 'normal':
      return 'bg-neutral';
    case 'fire':
      return 'bg-orange';
    case 'water':
      return 'bg-blue';
    case 'grass':
      return 'bg-green';
    case 'electric':
      return 'bg-yellow';
    case 'ground':
      return 'bg-amber';
    case 'rock':
      return 'bg-stone';
    case 'flying':
      return 'bg-sky';
    case 'poison':
      return 'bg-violet';
    case 'bug':
      return 'bg-lime';
    case 'fighting':
      return 'bg-red';
    case 'psychic':
      return 'bg-purple';
    case 'dark':
      return 'bg-gray';
    case 'fairy':
      return 'bg-pink';
    case 'steel':
      return 'bg-zinc';
    case 'dragon':
      return 'bg-slate';
    case 'ghost':
      return 'bg-indigo';
    case 'ice':
      return 'bg-cyan';
    default:
      return 'bg-neutral';
  }
}

export const CardContainer = ({ poke }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const detailsPromises = poke.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      });
      const details = await Promise.all(detailsPromises);
      setPokemonDetails(details);
      setFilteredPokemon(details); 
    };

    fetchPokemonDetails();
  }, [poke]);

  useEffect(() => {
    const filtered = pokemonDetails.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }, [searchTerm, pokemonDetails]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (selectedTypes) => {
    if (selectedTypes.length === 0) {
      setFilteredPokemon(pokemonDetails);
    } else {
      const filtered = pokemonDetails.filter(pokemon =>
        pokemon.types.some(type => selectedTypes.includes(type.type.name))
      );
      setFilteredPokemon(filtered);
    }
  };

  return (
    <>
      <div className="p-5 w-10/12 mx-auto">
        <SearchPkmn onSearchChange={handleSearchChange} />
        <FilterPkmn onFilterChange={handleFilterChange} getTypeColor={getTypeColor} />
        <div className="flex !flex-wrap">
          {filteredPokemon.map((pokemon, index) => (
            <div key={index} className="w-6/12 md:w-4/12 lg:w-3/12 p-4 my-4">
              <CardPkmn pokemon={pokemon} getTypeColor={getTypeColor} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
