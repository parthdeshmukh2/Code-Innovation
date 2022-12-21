import React from "react";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/AuthReducer/action";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Dispatching the Login Function to Redux/AuthReducer/action.js
  // This function will only called when userName and password has a valid input
  // You have to fill the correct details as per registration only then it will login
  const handleLogin = () => {
    if (Email && Password) {
      dispatch(userLogin({ Email, Password }, navigate));
    } else {
      alert("Please fill both the details");
    }
  };

  return (
    <Box>
      <Navbar />
      <Box
        w={{ base: "90%", md: "60%", lg: "30%" }}
        display="flex"
        flexDirection="column"
        p="4"
        m="auto"
        mt="16"
        alignItems="center"
        boxShadow="2xl"
        rounded="xl"
      >
        <Text fontSize="2xl" fontWeight="700" fontFamily="cursive">
          Login
        </Text>
        <Input
          placeholder="Enter Email"
          type="text"
          mt="4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Enter UserName"
          type="password"
          mt="4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button bg="green" color="white" mt="8" onClick={handleLogin}>
          Login
        </Button>

        <Box display="flex" mt="8">
          <Text fontSize="lg" fontFamily="cursive">
            Don't have an Account?
          </Text>
          <Text
            fontSize="lg"
            fontFamily="cursive"
            color="blue"
            textDecoration="underline"
            cursor="pointer"
            onClick={() => navigate("/register")}
          >
            Register Here
          </Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
