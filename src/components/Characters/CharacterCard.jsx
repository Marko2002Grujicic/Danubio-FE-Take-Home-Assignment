import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import StatusButton from '../StatusButton';

const CharacterCard = ({character}) => {
    const {id, image, name, location, status} = character;

  return (
    <Link to={`/character/${id}`}
    style={{textDecoration: 'none', width: '400px', height: '520px', border: '3px solid #117FEE', color: 'black', borderRadius: '5px', position: 'relative'}}
    >
        <img src={image} alt={name}
        loading='lazy' style={{width: '100%'}}
        />
        <Stack alignItems='flex-start' justifyContent='space-between' ml='20px'>
            <Typography variant='h4' mb='20px'>
                {name}
            </Typography>
            <Typography color='#818181'>
            Last Location:
                </Typography>
            <Typography fontWeight='bold'>
            {location.name}
            </Typography>
            <StatusButton status={status} position='absolute' id='characterCard'/>
            
        </Stack>
    </Link>
  )
}

export default CharacterCard