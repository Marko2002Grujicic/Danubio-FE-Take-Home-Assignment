import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccordionComponent from './AccordionComponent';

const Filters = ({setStatus, setPageNumber, setGender, setSpecies, setSearch, setSearchQuery}) => {
    const [expanded, setExpanded] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (name) => (event, isExpanded) => {
        setExpanded(isExpanded ? name : false);
      };
    
      const filterObjects = [
            {
               name: 'Status',
               array : [ {
                label: 'Alive',
                value: 'status-alive'
               },
               {
                label: 'Dead',
                value: 'status-dead'
               },
               {
                label: 'Unknown',
                value: 'status-unknown'
               }],
               action: setStatus,
           },
           {
            name : 'Gender',
            array: [{
                label: 'Male',
                value: 'gender-male'
                },
                {
                    label: 'Female',
                    value: 'gender-female'
                },
                {
                    label: 'Genderless',
                    value: 'gender-genderless'
                }],
                action: setGender,
           },
           {
            name: 'Species',
            array: [{
                label: 'Human',
                value: 'species-human'
            },
            {
                label: 'Humanoid',
                value: 'species-humanoid'
            },
            {
                label: 'Poopybutthole',
                value: 'species-poopybutthole'
            },
            {
                label: 'Mythological',
                value: 'species-mythological'
            },
            {
                label: 'Unknown',
                value: 'species-unknown'
            },
            {
                label: 'Animal',
                value: 'species-animal'
            },
            {
                label: 'Disease',
                value: 'species-disease'
            },
            {
                label: 'Robot',
                value: 'species-robot'
            },
            {
                label: 'Cronenberg',
                value: 'species-cronenberg'
            },
            {
                label: 'Planet',
                value: 'species-planet'
            },],
              action: setSpecies,
           }
      ]
      const clearFilterHandler = () =>{
        setStatus('')
        setSpecies('')
        setGender('')
        setPageNumber(1)
        setExpanded(false)
        setSearch('')
        setSearchQuery('')
        setSelectedValue('');
      }
  return (
    
    <Box 
    sx={{
        border: '2px solid black',
        borderRadius: '10px',
        marginTop: {lg: '10px', xs: '15px'},
        color: '#117FEE',
        width: {lg:'610px', md:'410px', xs: '310px'},
    }}>
        <Stack alignItems='flex-start'>
            <Typography variant='h4' pl={1}>
                Filters
            </Typography>
            <Box sx={{width: {lg:'600px', md:'400px', xs: '300px'}}}>
                {filterObjects.map((object,index) => (
                    <AccordionComponent 
                    expanded={expanded}
                    object={object}
                    key={index}
                    handleChange={handleChange}
                    setPageNumber={setPageNumber}
                    setSelectedValue={setSelectedValue}
                    selectedValue={selectedValue}
                    />
                ))}
            </Box>
            <Button sx={{mt: '15px'}} onClick={()=> clearFilterHandler()} >
                Clear filters
            </Button>
        
        </Stack>
        </Box>
  )
}

export default Filters