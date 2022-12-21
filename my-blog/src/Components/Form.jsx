import { Box, Input, Text, Textarea, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { PostBlogData } from "../Redux/AppReducer/action";

const Form = () => {
  const isLogin = useSelector((store) => store.AuthReducer.isAuth);
  const token = useSelector((store) => store.AuthReducer.token);
  const navigate = useNavigate();
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const dispatch = useDispatch();
  const editor = useRef(null);

  const handlePost = () =>{
    if(Title && Content){
    dispatch(PostBlogData({Title, Content}, token));
    }
    else{
        alert("All the fields are necessary")
    }

  }

  return (

    <Box>
      {!isLogin && (
        <Box w="80%" m="auto" mt="16" textAlign="center">
          <Text fontSize="4xl" fontFamily="cursive" fontWeight="600">
            Please Login To Upload Images
          </Text>
          <Button
            mt="16"
            bg="green"
            color="white"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
      )}

      {isLogin && (
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

          <Input placeholder="Enter Title" w="90%" m="auto" mt="8" onChange={(e)=> setTitle(e.target.value)} />
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
            onClick = {handlePost}
          >
            Post Your Blog
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Form;
