import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import Recipe from './Recipe';

const Home = () => {
    let details = JSON.parse(localStorage.getItem("details"));
    console.log(details);

    return (
        <Box>
            {!details ? <Navigate to="/login"/> : <Recipe/>}
        </Box>
      )
  
}

export default Home