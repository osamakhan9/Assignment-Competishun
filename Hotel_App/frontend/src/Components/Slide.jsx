import React from 'react'
import { Box, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import {ImageSlide} from '../lib'
import  { useMemo } from 'react'

function Slide() {

	const images = useMemo(() => [
		'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600',
		'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	  ], [])
	
	  const captions = useMemo(() => [
		'1',
		'2',
		'3',
		'4'
	  ], [])

  return (
	<div>
		<Box width='100%' height='500px' display='flex' justifyContent='center'>
		<ImageSlide images={images} captions={captions} />
		</Box>
	</div>
  )
}

export default Slide