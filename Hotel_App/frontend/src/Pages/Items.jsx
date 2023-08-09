import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, useToast, Flex, } from '@chakra-ui/react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Items = ({ el }) => {
    let details = JSON.parse(localStorage.getItem("details"));
    const navigate = useNavigate();
    const toast = useToast()
    const handlefav = async () => {
        let value = {
            data: el,
            access: details[2]
        }
        toast({
            title: "“Your booking has been confirmed”",
            status: 'success',
            isClosable: true,
        });
    }
  
    return (
        <>
            

            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                bg="white"
            >

                <Box h='350' w='100%' m='auto'>
                    <Image h='100%' w='100%' src={`https://images.unsplash.com/photo-1537572263231-4314a30d444f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80`} alt='Image' />
                </Box>
                <Box p="6">
                    <Box alignItems="baseline">
                        <Box gap='10px'>
                            <Box gap='7px' alignItems='center'>
                                <Heading size='md'>{el.original_title}</Heading>
                                <Text fontSize="md" fontWeight="semibold" color="gray.600" mr="2">
                                 City: Kolkata, India
                                </Text>

                                <Text display='flex' fontSize="md" fontWeight="semibold" color="gray.600" mr="2">
                                 Rating:{<AiFillStar className='icon'/>} {<AiFillStar className='icon'/>} {<AiFillStar className='icon'/>} {<AiFillStar className='icon'/>} <AiOutlineStar className='icon'/>
                                </Text>

                            </Box>
                        </Box>


                    </Box>


                    <Box display='flex' gap='10' justifyContent='center' mt='10'>
                        <Button width='100%' _hover={{ bg: 'blue' }} color='white' bg='black' onClick={handlefav}>
                        Book Now
                        </Button>

                        {/* <Button _hover={{ bg: 'blue' }} color='white' bg='black' onClick={handlewatch}>
                            WatchList
                        </Button> */}
                    </Box>


                 
                </Box>
            </Box>
        </>
    )
}

export default Items