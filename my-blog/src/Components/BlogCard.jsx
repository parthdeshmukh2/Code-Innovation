import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DeleteBlogData } from "../Redux/AppReducer/action";

const BlogCard = (elem) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((store)=> store.AuthReducer.token)
  
  const handleDelete = () => {
    dispatch(DeleteBlogData(elem._id, token));
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      boxShadow="xl"
      p="8"
      rounded="xl"
    >
      <Link to={`/${elem._id}`}>
        <Text
          textAlign="center"
          fontSize="3xl"
          fontWeight="600"
          fontStyle="italic"
          cursor="pointer"
        >
          {elem.Title}
        </Text>
        <Text
          textAlign="justify"
          fontSize="xl"
          mt="4"
          cursor="pointer"
          fontStyle="oblique"
        >
          {elem.Content}
        </Text>
      </Link>
      <Box display="flex" justifyContent="center" gap="4">
        <Button
          bg="blue"
          color="white"
          onClick={() => navigate(`/edit/${elem._id}`)}
        >
          Edit
        </Button>
        <Button bg="red" color="white" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default BlogCard;
