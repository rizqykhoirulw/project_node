import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button, Flex, HStack, Heading, Collapse, Spacer } from "@chakra-ui/react";
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const FirstNavbar= () => {
    return(
        <Box 
            position="absolute"
            top={0}
            left={0}
            right={0}
            zIndex="2"
        > 
            <Flex justifyContent="space-between" p="20px" bg="transparent" alignItems="center" w="100%"> 
                <Heading color="white" marginLeft="30px">
                    BaliBacpacker
                </Heading>
                <Spacer />

                <HStack spacing="60px" marginRight="60px">
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s"}} bg="transparent" p="0" m="0" fontSize="18px" fontWeight="semibold" color="white" letterSpacing="1px">
                        Home
                    </Button >
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s"}} bg="transparent" p="0" m="0" fontSize="18px" fontWeight="semibold" color="white" letterSpacing="1px">
                        About Us
                    </Button >
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s"}} bg="transparent" p="0" m="0" fontSize="18px" fontWeight="semibold" color="white">
                        <Link to="/paket">
                            Tour
                        </Link>
                    </Button >
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s"}} bg="transparent" p="0" m="0" fontSize="18px" fontWeight="semibold" color="white"  letterSpacing="1px">
                        Contact Us
                    </Button >
                    <Button _hover={{backgroundColor: "transparent", color:"yellow", transition:"0.4s", borderColor:"yellow"}} bg="transparent" fontSize="18px" fontWeight="semibold" color="white" letterSpacing="1px" border="2px" borderColor="white">
                        <Link to="/login">Login</Link>
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
}

const SecondNavbar = () => {
    const [navbar, setNavbar] = useState(false);

    const chngBg = () => {
        if (window.scrollY > 300) {
            setNavbar(true);  
        } else{
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', chngBg);
        return() => {
            window.removeEventListener('scroll', chngBg)
        }
    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return(
        <Collapse in={navbar} offsetY="-20px" animateOpacity> 
            <Box 
                position="fixed"
                top={0}
                left={0}
                right={0}
                bg="white"
                boxShadow="lg"
                zIndex="2"
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
        </Collapse>
    );
}


const NavBar = () => {
    

    return(
        <>
            <FirstNavbar/>
            <SecondNavbar/>
        </>
        
    );
    
}

export default NavBar;

// const activeCenter = {
    //     backgroundColor: "transparent",
    //     // transition: "0.8s"
    // }

    // const activeBottom = {
    //     backgroundColor: "#3182CE",
    //     // transition: "0.8s"
    // }