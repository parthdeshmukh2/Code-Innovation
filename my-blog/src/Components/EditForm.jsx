import React, {useState, useRef} from 'react'
import {Box, Text, Button, Input}  from '@chakra-ui/react';
import JoditEditor from 'jodit-react';


const EditForm = () => {
    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");
    const editor = useRef(null);

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

          <Input placeholder="Enter Title" w="90%" m="auto" mt="8" />
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
          >
            Update Blog
          </Button>
        </Box>
  )
}

export default EditForm
