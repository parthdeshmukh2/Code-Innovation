import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Form from "../Components/Form";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Form/>
      <Footer />
    </Box>
  );
};

export default HomePage;
