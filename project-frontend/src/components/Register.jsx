import React, { useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Heading, Input, Text, Button, Grid, GridItem, Image } from '@chakra-ui/react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"

const Register = () => {

  const [input, setInput] = useState({
    username : "",
    email : "",
    password : ""
  })

  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput(
        prev=>({...prev, [e.target.name] : e.target.value})
    )
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/backend/auth/register", input);
      navigate("/login");
    }
    catch(err){
      setError(err.response.data);
      console.error(error)
    }
  }
  
    
  return (
    <Flex w="100%" bgColor="blue.100" h="100vh" justifyContent="center" alignItems="center" >
        <Grid w="60%" templateColumns="repeat(5, 1fr)" borderRadius="30px" bgColor="white" m="auto" boxShadow="0 0 10px 1px rgba(0, 0, 0, .1)">
            <GridItem colSpan={2} h="100%">
              <Image h="100%" src="p1.jpg" borderTopLeftRadius="30px" borderBottomLeftRadius="30px" />
            </GridItem>  
            <GridItem colSpan={3} p="80px">
                <Flex w="100%" justifyContent="space-evenly" flexDir="column"  h="100%" gap="15px">
                <Box>
                    <Heading>Welcome</Heading>
                    <Text color="grey">Welcome. Please enter your details to create account</Text>
                </Box>
                <FormControl color="black">
                    <FormLabel >Username</FormLabel>
                    <Input type='text' borderColor="grey" name='username' onChange={handleChange} />
                </FormControl>
                <FormControl color="black">
                    <FormLabel>Email</FormLabel>
                    <Input type='email' borderColor="grey" name='email' onChange={handleChange} />
                </FormControl>
                <FormControl color="black">
                    <FormLabel>Password</FormLabel>
                    <Input type='password' borderColor="grey" name='password' onChange={handleChange} />
                </FormControl>
                {error && <Text>Username atau Email telah digunakan</Text>}
                <Button onClick={handleSubmit}>
                    Sign up
                </Button>
                 x
                </Flex>
            </GridItem>
        </Grid>
    </Flex>
  )
}

export default Register