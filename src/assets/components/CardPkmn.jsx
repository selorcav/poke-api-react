import * as React from 'react';
import { Card, CardMedia, Chip, Stack, CardActionArea } from '@mui/material';

export const CardPkmn = ({ pokemon, getTypeColor }) => {
  console.log(pokemon);

  return (
    <>
      <Card className={`!overflow-visible ${getTypeColor(pokemon.types[0].type.name)}-500 mt-4 rounded hover:shadow-2xl transition-all hover:cursor-pointer h-full`}>
        <CardActionArea className='h-full'>
          <div className='overflow-visible  my-custom-background rounded'>
            <div className="flex w-full justify-center relative">
              <div className={`${getTypeColor(pokemon.types[0].type.name)}-700 absolute w-10/12 p-2 rounded-md shadow-xl -top-8 z-50`}>
                <p className='afacad-600 text-white text-xl font-bold text-center'>
                  #{pokemon.id} {pokemon.name.toUpperCase()}
                </p>
              </div>
            </div>

            <CardMedia
              component="img"
              height="140"
              image={pokemon.sprites.other.dream_world.front_default}
              alt="Pokemon img"
              className='!w-6/12 px-4 pt-8 mx-auto bg-transparent '
            />

            <Stack direction="row" className='justify-center mt-4 p-8' spacing={1}>
              {pokemon.types.map((data, index) => (
                <Chip key={index} className={`${getTypeColor(data.type.name)}-300 shadow afacad-600`} label={data.type.name.toUpperCase()} />
              ))}
            </Stack>
          </div>
        </CardActionArea>
      </Card>
    </>
  )
}
