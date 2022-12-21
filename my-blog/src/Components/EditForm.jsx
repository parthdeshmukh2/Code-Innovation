import React, { useState, useRef, useEffect } from "react";
import { Box, Text, Button, Input } from "@chakra-ui/react";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UpdateBlogData } from "../Redux/AppReducer/action";

const EditForm = () => {
  const editor = useRef(null);

  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const token = useSelector((store) => store.AuthReducer.token);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
const dispatch = useDispatch();

const handleUpdate = () => {
    dispatch(UpdateBlogData({Title, Content, _id:id}, token))
}


  useEffect(() => {
    axios
      .get(`http://localhost:8080/blog/${id}`, {
        headers: {
          token: "Bearer " + token,
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setBlog(res.data);
        setTitle(blog.Title);
        setContent(blog.Content);
      })
      .catch((err) => console.log(err));
  }, []);
  
     
  return (
    <Box
      w="90%"
      display="flex"
      flexDirection="column"
      m="auto"
      justifyContent="center"
      textAlign="center"
      mt="16"
      boxShadow="dark-lg"
      rounded="xl"
      p="4"
    >
      <Text fontSize="4xl" fontFamily="cursive" fontWeight="800">
        Post Your Personal Blog Here....
      </Text>

      <Input placeholder="Enter Title" w="90%" m="auto" mt="8" value={Title} onChange={(e)=> setTitle(e.target.value)} />
      <Box w="90%" m="auto" mt="8">
        <JoditEditor
          ref={editor}
          value={Content}
          onChange={(newContent) => setContent(newContent)}
          h="100%"
        />
      </Box>

      <Button
        w={{ base: "40%", md: "20%", lg: "10%" }}
        m="auto"
        mt="8"
        bg="green"
        color="white"
        onClick={handleUpdate}
      >
        Update Blog
      </Button>
    </Box>
  );
};

export default EditForm;
