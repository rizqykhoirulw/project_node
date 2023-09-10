import React, { useContext, useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Heading, Input, Text, Button, Grid, GridItem, Checkbox, Image } from '@chakra-ui/react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext.js';


const Login = () => {
  const [input, setInput] = useState({
    username : "",
    email : "",
    password : ""
  })

  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInput(
        prev=>({...prev, [e.target.name] : e.target.value})
    )
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      login(input);
      navigate("/admpg");
      // await axios.post("http://localhost:8800/backend/auth/login", input, {withCredentials: true});
    }
    catch(err){
      setError(err.response.data);
      console.error(error)
    }
  }

  return (
    <Flex w="100%" bgColor="blue.100" h="100vh" justifyContent="center" alignItems="center" >
        <Grid w="60%" templateColumns="repeat(5, 1fr)" borderRadius="30px" bgColor="white" m="auto" boxShadow="0 0 10px 1px rgba(0, 0, 0, .1)">
          <GridItem colSpan={3} p="80px">
            <Flex w="100%" justifyContent="space-evenly" flexDir="column"  h="100%">
              <Box>
                <Heading>Welcome Back!</Heading>
                <Text color="grey">Welcome back, admin. Please enter your details</Text>
              </Box>
              <FormControl color="black">
                <FormLabel >Username</FormLabel>
                <Input type='text' borderColor="grey" onChange={handleChange} name='username'/>
              </FormControl>
              <FormControl color="black">
                <FormLabel>Password</FormLabel>
                <Input type='password' borderColor="grey" onChange={handleChange} name='password'/>
              </FormControl>
              <Flex w="100%" justifyContent="space-between">
                <Checkbox>Remember for 30 days</Checkbox>
                <Text fontWeight="bold" cursor="pointer">Forget Password?</Text>
              </Flex>
              <Button onClick={handleSubmit}>
                Sign in
              </Button>
              <Text textAlign="center">Belum punya akun? <Link to="/register">Register</Link> </Text>
            </Flex>
            {/* <Flex justifyContent="center" alignItems="center" textAlign="center" m="auto" >
                <Flex w="50%" bgColor="whitesmoke"  p="20px" justifyContent="center" alignItems="center" flexDir="column" gap="20px" borderRadius="20px">
                  <FontAwesomeIcon icon={faUser} fontSize="30px"/>
                  <Heading color="teal" fontSize="30px">Sign In</Heading>
                  <FormControl color="black">
                    
                    <Input type='text' borderColor="grey" borderRadius="0" borderX="0" borderTop="0" _focus={{ boxShadow: "0 0 0 0"}}  placeholder="Masukkan Username" pl="0"/>
                  </FormControl>
                  <FormControl color="black">
                    <FormLabel>Password</FormLabel>
                    <Input type='password' borderColor="grey" borderRadius="0" borderX="0" borderTop="0" _focus={{ boxShadow: "0 0 0 0"}}/>
                  </FormControl>
                  <Button bgColor="teal" color="white">Login</Button>
                </Flex>
              </Flex> */}
          </GridItem>
            
          <GridItem colSpan={2} h="100%">
              <Image h="100%" src="p1.jpg" borderTopRightRadius="30px" borderBottomRightRadius="30px" />
          </GridItem>  
        </Grid>
    </Flex>
  )
}

export default Login