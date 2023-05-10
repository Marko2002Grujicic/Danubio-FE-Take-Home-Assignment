import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons/rick.png'
import { Stack } from '@mui/material'
const Navbar = () => {
  return (
    <Link to={'/'}
    style={{textDecoration: 'none', fontSize: '30px', fontWeight: 'bold'}}>
        <Stack direction='row' alignItems='center'>
            <img src={Logo} alt='logo' width={50} height={50}/>
            
                Rick & Morty Wiki
          
        </Stack>
    </Link>
  )
}

export default Navbar