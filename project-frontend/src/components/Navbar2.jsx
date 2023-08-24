import React from 'react'
import { Box, Button, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";

const Navbar2 = () => {
  return (
        <Box 
            position="sticky"
            top={0}
            left={0}
            right={0}
            bg="white"
            boxShadow="lg"
        > 
            <Flex justifyContent="space-between" p="20px"  alignItems="center" w="100%"> 
                <Heading color="blue.400" marginLeft="30px">
                    BaliBacpacker
                </Heading>
                <Spacer />

                <HStack spacing="60px" marginRight="60px">
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s"}} bg="transparent" p="0" m="0" fontSize="18px" fontWeight="semibold" color="black" letterSpacing="1px">
                        Home
                    </Button >
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s"}} bg="transparent" p="0" m="0" fontSize="18px" fontWeight="semibold" color="black" letterSpacing="1px">
                        About Us
                    </Button >
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s"}} bg="transparent" p="0" m="0" fontSize="18px" fontWeight="semibold" color="black">
                        Tour
                    </Button >
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s"}} bg="transparent" p="0" m="0" fontSize="18px" fontWeight="semibold" color="black"  letterSpacing="1px">
                        Contact Us
                    </Button >
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s", borderColor:"yellow"}} bg="transparent" fontSize="18px" fontWeight="semibold" color="black" letterSpacing="1px" border="2px" borderColor="black">
                        Login
                    </Button>
                </HStack>
            </Flex>
        </Box>
  )
}

export default Navbar2