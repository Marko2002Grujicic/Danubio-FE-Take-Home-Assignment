import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import StatusButton from '../components/StatusButton'

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
    <Stack 
    alignItems='center'  
    pb='50px'
    pt='55px'
    minHeight='100vh'
    >
      <Box sx={{
        width: {
          lg: '800px',
          md: '600px',
          xs: '350px'
        },
        border: '2px solid black',
        borderRadius: '10px',
        bgcolor: '#B9B9B9',
        padding: '10px',
        overflow: 'auto'
        }}>
        
        <Box id='image' 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
          <img src={image} alt={name} style={{
            width: '80%', borderRadius: '50%',
            }}/>
        </Box>
        <Box id='title'>
          <Typography variant='h3' textAlign='center' fontWeight='400'>
            {name}
          </Typography>
        </Box>
        <Box id='character-details' pt='10px'>
          <StatusButton status={status} position={'static'} id={'characterPage'}/>
          <br/>
          <Typography textTransform='capitalize' border='2px solid black' padding='10px' borderRadius='10px' sx={{
            fontSize:{
              lg: '25px',
              xs: '20px'
            }
          }}>
            <b>Gender:</b> {gender}
            <br/>
            <b>Location:</b> {location.name}
            <br/>
            <b>Origin:</b> {origin.name}
            <br/>
            <b>Species:</b> {species}
            <br/>
            <b>Appearing in:</b> {episode.length} episodes
            <br/>
            <b>Created on:</b> {formattedDate}
            </Typography>
        </Box>
        </Box>
      </Stack>

  )
}

export default CharacterPage