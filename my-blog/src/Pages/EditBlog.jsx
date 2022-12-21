import { Box } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EditForm from '../Components/EditForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
