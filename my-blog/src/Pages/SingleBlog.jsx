import { Box, Text, Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useSelector } from 'react-redux';

const SingleBlog = () => {
  const {id}= useParams();
   const navigate = useNavigate();
   const [blog , setBlog] = useState({});
   const token = useSelector((store)=> store.AuthReducer.token);

useEffect(()=>{
   axios.get(`http://localhost:8080/blog/${id}`, {
    headers:{
      token: "Bearer " + token,
      "Content-type": "application/json",
    }
   })
   .then((res)=> setBlog(res.data))
   .catch((err)=> console.log(err))
},[])

console.log(blog);
  return (
    <Box>
      <Navbar/>
      <Box mt='16'>
      <Text
          textAlign="center"
          fontSize="3xl"
          fontWeight="600"
          fontStyle="italic"
          cursor="pointer"
        >
          {blog.Title}
        </Text>
        <Text
          textAlign="center"
          fontSize="xl"
          mt="4"
          cursor="pointer"
          fontStyle="oblique"
          
        >
          {blog.Content}
        </Text>
      
      <Box display="flex" justifyContent="center" gap="4">
        <Button
          bg="blue"
          color="white"
          onClick={() => navigate(`/edit/${id}`)}
          mt='8'
        >
          Edit
        </Button>
       
      </Box>
      </Box>
      

      <Footer/>
      
    </Box>
  )
}

export default SingleBlog
