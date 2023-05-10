import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box bgcolor='#117FEE' padding={'20px'} alignItems='center' display='flex' justifyContent='center'>
        <Typography variant='h6' fontSize='16px' textAlign='center' color='white'>
            Marko Grujičić 2023 for Danubio Take-Home Assignment
        </Typography>
    </Box>
  )
}

export default Footer