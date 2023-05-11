import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import StatusButton from '../StatusButton';

const CharacterCard = ({character}) => {
    const {id, image, name, location, status} = character;

  return (
    <Box sx={{
        position: 'relative',width: '400px', 
        height: '560px', border: '3px solid #117FEE', borderRadius: '5px',boxShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.5)', 
        "&:hover":{
            boxShadow: '0 16px 32px 0 rgba(0, 0, 0, 0.5)'
        }
    }}>
    <Link to={`/character/${id}`}
    style={{
        textDecoration: 'none', color: 'black'
    }}
    >
        <img src={image} alt={name}
        loading='lazy' style={{width: '100%',}}
        />
        <Stack alignItems='flex-start' justifyContent='space-around' ml='20px'>
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
    </Box>
  )
}

export default CharacterCard