import { Box} from '@mui/material'
import React, { useState } from 'react'
import SearchCharacters from '../components/Search/SearchCharacters'
import Characters from '../components/Characters/Characters';


const Homepage = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(1);
    const [status, setStatus] = useState('')
    const [gender, setGender] = useState('')
    const [species, setSpecies] = useState('')
  return (
    <Box>
        <SearchCharacters 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        setSearch={setSearch}
        setPageNumber={setPageNumber}
        setStatus={setStatus}
        setGender={setGender}
        setSpecies={setSpecies}
        />
        <Characters search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}
        status={status}
        gender={gender}
        species={species}
        />
    </Box>
  )
}

export default Homepage