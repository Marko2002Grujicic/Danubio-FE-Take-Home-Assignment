import { Box } from '@mui/material'
import React from 'react'

const StatusButton = ({status, position, id}) => {
  return (
    <Box
    id={id} 
    sx={{
        backgroundColor: 
        status === 'Alive' ? 'green' : 
        status === 'Dead' ? '#9A1700' : 'gray',
        color: 'white',
        position:
        position === 'absolute' ? 'absolute' : 'static',
        top: position === 'absolute' ? '5px' : '0',
        right: position === 'absolute' ? '5px' : '0',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '18px',
        fontWeight: '500',
        fontFamily: 'Roboto',
        textTransform: 'capitalize',
        textAlign: 'center'
    }}>    
                {status}
    </Box>
  )
}

export default StatusButton