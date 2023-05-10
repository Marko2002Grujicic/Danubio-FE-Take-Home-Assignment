import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Filters from '../Filters/Filters'

const SearchCharacters = ({searchQuery, setSearchQuery, setSearch, setPageNumber, setStatus, setGender, setSpecies}) => {


  return (
    <Stack
        alignItems='center'
        mt='37px'
        justifyContent='center'
        p='20px'
    >
        <Typography variant='h2' textAlign='center'>
        Characters
        </Typography>
        <Box position='relative' mt='10px' mb='10px'>
            <TextField 
            label="Search Characters" 
            variant="outlined" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            sx={{
                input: {
                    fontWeight: '700',
                }, 
                width: {lg: '1170px', md:'500px', xs: '350px'},
                backgroundColor: '#fff',
            }}/>
            <Button 
            variant='outlined'
            sx={{
                textTransform: 'none',
                width: {lg: '173px', xs: '80px'},
                height: '56px',
                position: 'absolute',
                right: '0px',
                fontSize: {lg: '20px', xs: '14px'},
                backgroundColor: '#117FEE',
                color: 'white',
                '&:hover': {
                    color:'white',
                    backgroundColor: '#117FEE'
                },
                '&:active':{
                    color:'#117FEE',
                    bgcolor: 'white'
                }
            }}
            onClick={()=> {
                setSearch(searchQuery);
                setPageNumber(1);
            }}
            >
                Search
            </Button>
        </Box>
        <Filters 
        setStatus={setStatus} 
        setGender={setGender} 
        setSpecies={setSpecies}
        setPageNumber={setPageNumber}/>
    </Stack>
  )
}

export default SearchCharacters