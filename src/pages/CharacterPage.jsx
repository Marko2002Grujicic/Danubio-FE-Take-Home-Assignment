import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

const CharacterPage = () => {
  const {id} = useParams()
  const [singleCharacter, setSingleCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => {
      setSingleCharacter(data)
    })
  },[id]);

  if (singleCharacter === null) return <Loader/>;

  const {name, image, status, gender, location, origin, species, episode, created} = singleCharacter;

  const date = new Date(created);
  const formattedDate = date.toLocaleDateString('en-GB');

  return (
    <Stack alignItems='center' mt={0}>
      <Box width='600px'>
        <Box id='title'>
          <Typography variant='h2' textAlign='center' fontWeight='400'>
            {name}
          </Typography>
        </Box>
        <Box id='image'>
          <img src={image} alt={name} style={{width: '600px'}}/>
        </Box>
        <Box id='character-details'>
          <Button color='success' variant='outlined'
            sx={{
                backgroundColor: status === 'Alive' ? 'green' : status === 'Dead' ? '#9A1700' : 'gray',
                color: 'white',
                width: '100%',
                textTransform: 'capitalize',
                fontSize: '24px'
            }}>
            {status}
          </Button>
          <Typography>
            <b>Gender:</b> {gender}
            </Typography>
          <Typography textTransform='capitalize'>
            <b>Location:</b> {location.name}
            </Typography>
          <Typography>
            <b>Origin:</b> {origin.name}
            </Typography>
          <Typography>
            <b>Species:</b> {species}
            </Typography>
            <Typography>
              <b>Appearing in:</b> {episode.length} episodes
            </Typography>
            <Typography>
              <b>Created on:</b> {formattedDate}
            </Typography>
        </Box>
        </Box>
      </Stack>

  )
}

export default CharacterPage