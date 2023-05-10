import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons/rick.png'
import { Box, Typography } from '@mui/material'
const Navbar = () => {
  return (
    <Box bgcolor='#117FEE' padding='10px'>
    <Link to={'/'}
    style={{textDecoration: 'none', width: 'fit-content', alignItems: 'center', display: 'flex'}}>
            <img src={Logo} alt='logo' width={50} height={50}/>
            <Typography variant='h2' fontSize='30px' color='white' fontWeight='bold'>
                Rick & Morty Wiki
            </Typography>
    </Link>  
    </Box>
   
  )
}

export default Navbar