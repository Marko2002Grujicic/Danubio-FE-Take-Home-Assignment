import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccordionComponent from './AccordionComponent';

const Filters = ({setStatus, setPageNumber, setGender, setSpecies, setSearch, setSearchQuery}) => {
    const [expanded, setExpanded] = useState(false);
    const [selectedValue, setSelectedValue] =useState('');
    const handleChange = (name) => (event, isExpanded) => {
        setExpanded(isExpanded ? name : false);
      };
    
      const objects = [
            {
               name: 'Status',
               array : ['Alive', 'Dead', 'Unknown'],
               action: setStatus,
           },
           {
            name : 'Gender',
            array: [ 'Male','Female', 'Genderless', 'Unknown'],
            action: setGender,
           },
           {
            name: 'Species',
            array: ["Human",
                "Alien",
                "Humanoid",
                "Poopybutthole",
                "Mythological",
                "Unknown",
                "Animal",
                "Disease",
                "Robot",
                "Cronenberg",
                "Planet",
              ],
              action: setSpecies,
           }
      ]
      const clearFilterHandler = () =>{
        setStatus('')
        setSpecies('')
        setGender('')
        setPageNumber(1)
        setSelectedValue('')
        setExpanded(false)
        setSearch('')
        setSearchQuery('')
      }
  return (
    <Box 
    sx={{
        border: '2px solid black',
        borderRadius: '10px',
        marginTop: {lg: '10px', xs: '15px'},
        color: '#117FEE'
    }}>
        <Stack alignItems='flex-start'>
            <Typography variant='h4' pl={1}>
                Filters
            </Typography>
            <Box sx={{width: {lg:'800px', md:'400px', xs: '300px'}}}>
                {objects.map((object,index) => (
                    <AccordionComponent 
                    expanded={expanded}
                    object={object}
                    key={index}
                    handleChange={handleChange}
                    setPageNumber={setPageNumber}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
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