import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import PaginationComponent from '../Pagination'
import Loader from '../Loader/Loader'

const Characters = ({search, pageNumber, setPageNumber, status, gender, species}) => {
    const [fetchedData, setFetchedData] = useState([])
    const {info, results} = fetchedData;
   
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setFetchedData(data);
        })
    }, [api]);

    if(!results) return <Loader/>
  return (
    <Box p='20px'>
        <Stack direction='row' 
        sx={{ gap: {lg: '107px', xs: '50px'}}}
        flexWrap='wrap'
        justifyContent='center'
        >
            {results.slice(0,10).map((character, index) => (
                <CharacterCard key={index} character={character}/>
            ))}
        </Stack>
        <PaginationComponent info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        
    </Box>
  )
}

export default Characters