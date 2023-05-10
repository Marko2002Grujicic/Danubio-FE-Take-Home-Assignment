import { Box } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import CharacterPage from './pages/CharacterPage';
import Footer from './components/Footer';

function App() {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/character/:id' element={<CharacterPage/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
