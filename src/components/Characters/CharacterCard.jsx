import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({character}) => {
    const {id, image, name, location, status} = character;

  return (
    <Link to={`/character/${id}`}
    style={{textDecoration: 'none', width: '400px', height: '560px', border: '3px solid #117FEE', color: 'black', borderRadius: '5px', position: 'relative'}}
    >
        <img src={image} alt={name}
        loading='lazy' style={{width: '100%'}}
        />
        <Stack alignItems='flex-start' justifyContent='space-between' ml='20px' pb='10px'>
            <Typography variant='h4' mb='20px'>
                {name}
            </Typography>
            <Typography color='#818181'>
            Last Location:
                </Typography>
            <Typography fontWeight='bold'>
            {location.name}
            </Typography>
            <Button color='success' variant='outlined'
            sx={{
                backgroundColor: 
                status === 'Alive' ? 'green' : 
                status === 'Dead' ? '#9A1700' : 'gray',
                color: 'white',
                position: 'absolute',
                top: 5,
                right: 5
            }}>
                {status}
            </Button>
        </Stack>
    </Link>
  )
}

export default CharacterCard