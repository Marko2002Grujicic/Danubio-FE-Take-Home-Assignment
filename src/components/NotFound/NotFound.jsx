import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
const NotFound = () => {
  return (
    <Box sx={{
        mt: '5%',
        height: '40vh'
    }}>
        <Stack alignItems='center' justifyContent='center'
        >
            <Typography variant='h4' display='flex' alignItems='center' fontWeight='bold'>
                No characters found
                <SentimentVeryDissatisfiedIcon
                fontSize='30px'/>
            </Typography>
        </Stack>
    </Box>
  )
}

export default NotFound