import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EditForm from '../Components/EditForm'

const EditBlog = () => {
  return (
    <Box>

      <Navbar/>

      <EditForm/>
      <Footer/>
      
    </Box>
  )
}

export default EditBlog
