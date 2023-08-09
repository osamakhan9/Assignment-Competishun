import { Box, Heading,SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import ItemsReused from '../Components/ItemsReused'

const Favourite = () => {
  let details = JSON.parse(localStorage.getItem("details"));
  const [datas,setData] = useState([]);
  const getData = async()=>{
    let resp = await axios.get(`https://backend-competishun.onrender.com/favourite?q=${details[2]}`);
    setData(resp.data);
  }
  useEffect(()=>{
    getData();
  },[]);
  console.log(datas);
  return (
    <>
      <Box>
        <Navbar/>
      </Box>
      <Box>
        <Heading pt="100px" textAlign={"center"}>Favourite</Heading>
      </Box>


      <SimpleGrid margin='auto' gap='20px' columns={['1','1','2','4']}>
        {datas?.map((el)=>(
          <ItemsReused key={el.id} el={el.data}/>
        ))}
      </SimpleGrid>
    </>
  )
}

export default Favourite