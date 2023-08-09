import { Avatar, Box, Button, Input, Text, Flex, Spacer, ButtonGroup, Divider, Image, SimpleGrid,Menu,MenuButton,MenuItem,MenuList } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Items from './Items';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDown } from "react-icons/ai";
const Recipe = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [cuType, setCuType] = useState("Indian");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  let details = JSON.parse(localStorage.getItem("details"));
  const getData = async (page, search, cuType) => {
    if (search == "") {
      let res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=e22a45ca&app_key=241e9ff308c8c78227db3224ead0f9a7&cuisineType=${cuType}&from=0&to=5`);
      setData(res.data);
    } else {
      let res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=e22a45ca&app_key=241e9ff308c8c78227db3224ead0f9a7&cuisineType=${cuType}&q=${search}&from=0&to=5`);
      setData(res.data);
    }

  }
  const handleChanges = (e) => {
    setTimeout(() => {
      setSearch(e.target.value)
    }, 2000)
  }
  const handleDelete = () => {
    localStorage.clear();
    navigate("/login");
  }
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    getData(page, search, cuType)
  }, [page, search, cuType]);

  console.log(data);
  return (
    <>


      {/*Navbar */}


      <Box onClick={() => handleClick()} padding='10px 20px' color='white' bg='black' display={['none', 'none', 'none', 'block']} position='sticky' zIndex='10' top='0'>
        <Flex minWidth='max-content' alignItems='center' gap='2' >
          <Box p='2'>
            <Link to='/' >
              <Image maxW='100px' src='http://competishun.com/wp-content/uploads/2022/10/logo-1-e1666417639125.png' />
            </Link>
          </Box>
          <Spacer />
          <ButtonGroup gap='10'>



            <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/")}>Recipe</Text>

            <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/calorie")}>Calorie</Text>

            <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/diet")}>Diet</Text>


            <Box gap='10' display={{ sm: "none", lg: "flex" }}>
              <Text color={"white"} mt='3'>{details[1]}</Text>
              <Avatar src={details[3]} alt={details[1]} />
            </Box>
            <Button _hover={{ bg: 'blue.500' }} onClick={handleDelete}>Logout</Button>


          </ButtonGroup>


        </Flex>
      </Box>




      <Box padding='20px' color='white' display={['block', 'block', 'blog', 'none']} bg='#202A44' position='sticky' zIndex='10' top='0'>
        <Flex w='100%' m='auto' justifyContent='space-between' padding='0px 30px' alignItems='center'>
          <Box>
            <Link to='/'>
              <Image maxW='100px' src='http://competishun.com/wp-content/uploads/2022/10/logo-1-e1666417639125.png' />
            </Link>
          </Box>
          <Box color='#f06' onClick={() => setIsOpen(!isOpen)}>
            {

              isOpen ? <Text fontWeight='600' fontSize='21px'>✖</Text> : <Text fontWeight='600' fontSize='25px'>☰</Text>
            }
          </Box>
        </Flex>

        <Flex bg='#202A44' h='100vh' w='100%' padding='20px 50px' flexDirection='column' position='absolute' left={isOpen ? '0px' : '-1000px'} top='60px' transition='.3s all ease'>



          <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/")}>Recipe</Text>

          <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/calorie")}>Calorie</Text>

          <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/diet")}>Diet</Text>


          <Box gap='10' display={{ sm: "none", lg: "flex" }}>
            <Text color={"white"} mt='3'>{details[1]}</Text>
            {/* <Avatar src={details[3]} alt={details[1]} /> */}
          </Box>
          <Button mt='100' marginLeft='-2' _hover={{ bg: 'blue.500' }} onClick={handleDelete}>Logout</Button>


        </Flex>

      </Box>

      <Divider />





      {/* Main section */}



      <Box w='100%' m='auto' mt='40px' mb='50px' display='flex' justifyContent='space-around' >
        <Input type="text" placeholder='Search Food......' htmlSize={"50"} width='auto' bg={"white"} onChange={(e) => setSearch(e.target.value)} display={{ sm: "none", lg: "block" }} />

        
          <Menu>
            <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
              Curise Type: {cuType}
            </MenuButton>
            <MenuList onClick={(e)=>setCuType(e.target.value)}>
              <MenuItem value={"Indian"}>Indian</MenuItem>
              <MenuItem value={"Chinese"}>Chinese</MenuItem>
              <MenuItem value={"French"}>French</MenuItem>
              <MenuItem value={"Mexican"}>Mexican</MenuItem>
              <MenuItem value={"Asian"}>Asian</MenuItem>
            </MenuList>
          </Menu>
        
      </Box>
      <SimpleGrid gap='20px' columns={['1', '1', '2', '4']}>
        {data.hits?.map((el, i) => (
          <Items key={i} el={el} />
        ))}
      </SimpleGrid>
      <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} w="20%" margin="auto" mt="30px">
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
        <Button>{page}</Button>
        <Button isDisabled={data.total_results === page} onClick={() => setPage(page + 1)}>Next</Button>
      </Box>




    </>
  )
}

export default Recipe