import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import PaginationComponent from '../Pagination'
import NotFound from '../NotFound/NotFound'

const Characters = ({search, pageNumber, setPageNumber, status, gender, species}) => {
    const [fetchedData, setFetchedData] = useState([])
    const {info, results} = fetchedData;
   
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
    useEffect(() => {
            fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setFetchedData(data);
            })
    }, [apiUrl]);
    if (!results) return <NotFound/>
  return (
    <Box p='20px'>
        <Stack direction='row'
        minHeight='100vh'
        gap= {{lg: '107px', xs: '50px'}}
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