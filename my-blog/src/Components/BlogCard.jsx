import { Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BlogCard = (elem) => {
const navigate = useNavigate();

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' boxShadow='xl' p='8' rounded='xl' >
        <Link to={`blog/${elem.id}`}>
      
        <Text textAlign='center' fontSize='3xl' fontWeight='600' fontStyle='italic' cursor='pointer' >{elem.Title}</Text>
        <Text textAlign='justify' fontSize='xl' mt='4'  cursor='pointer' fontStyle='oblique'>{elem.Content}</Text>
        </Link>
      <Box display='flex' justifyContent='center' gap='4'>
        <Button bg='blue' color='white' onClick={()=> navigate(`/edit/${elem.id}`)}>Edit</Button>
        <Button bg='red' color='white' >Delete</Button>
      
      </Box>
    </Box>
  )
}

export default BlogCard
