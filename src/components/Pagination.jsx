import { Box, Stack, Pagination } from '@mui/material'
import React from 'react'

const PaginationComponent = ({info, setPageNumber, pageNumber}) => {
    const handlePageChange  = (e, value) => {
        setPageNumber(value)
        window.scrollTo({top: 100, behavior: 'smooth'})
    }

  return (
    <Box alignItems='center' justifyContent='center'>
    <Stack mt='100px' alignItems='center' justifyContent='center'>
          <Pagination
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={info.pages}
          page={pageNumber}
          onChange={handlePageChange}
          size='large'
          value={pageNumber}
          />
      </Stack>
    </Box>
  )
}

export default PaginationComponent