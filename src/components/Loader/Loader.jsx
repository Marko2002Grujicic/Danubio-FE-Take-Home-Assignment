import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '20px' }}>
    <CircularProgress />
  </Box>
  )
}

export default Loader