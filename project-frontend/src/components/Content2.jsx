import { Box, Card, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun, faUmbrellaBeach, faCalendarDays, faCar, faMoneyBill1Wave, faCommentSms, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Content2 = () => {
    const styleCard= {
        w:"100%", 
        display:"flex",  
        gap:"20px", 
        m:"auto",   
        p:"20px"
    };

    const styleLogo = {
        alignItems:"center", 
        justifyContent:"center", 
        borderRadius:"50%",
        backgroundColor:"blue.500", 
        m:"auto", 
        p:"40px", 
        w:"120px", 
        h:"120px"
    }

    return(
        <Flex flexDir="column" alignItems="center" gap="30px" marginBottom="20px">  
            <Heading>
                Services
            </Heading>
            <Grid w="100%" p="20px" templateColumns="repeat(3, 1fr)" gap="40px">
                {/* Service 1 */}
                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faMountainSun} color="white" fontSize="55px" />
                    </Flex>
                    <Flex flexDir="column" gap="20px">
                        <Heading fontSize="25px">Adventure</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore totam odio sunt similique a architecto voluptate maxime nobis dolorum.</Text>
                    </Flex>
                </Box>

                {/* Service 2 */}
                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faUmbrellaBeach} color="white" fontSize="55px" />
                    </Flex>
                    <Flex flexDir="column" gap="20px">
                        <Heading fontSize="25px">Adventure</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore totam odio sunt similique a architecto voluptate maxime nobis dolorum.</Text>
                    </Flex>
                </Box>

                {/* Service 3 */}
                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faCalendarDays} color="white" fontSize="55px" />
                    </Flex>
                    <Flex flexDir="column" gap="20px">
                        <Heading fontSize="25px">Adventure</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore totam odio sunt similique a architecto voluptate maxime nobis dolorum.</Text>
                    </Flex>
                </Box>

                {/* Service 4 */}
                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faCar} color="white" fontSize="55px" />
                    </Flex>
                    <Flex flexDir="column" gap="20px">
                        <Heading fontSize="25px">Adventure</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore totam odio sunt similique a architecto voluptate maxime nobis dolorum.</Text>
                    </Flex>
                </Box>

                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faMoneyBill1Wave} color="white" fontSize="55px" />
                    </Flex>
                    <Flex flexDir="column" gap="20px">
                        <Heading fontSize="25px">Adventure</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore totam odio sunt similique a architecto voluptate maxime nobis dolorum.</Text>
                    </Flex>
                </Box>  

                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faCommentDots} color="white" fontSize="55px" />
                    </Flex>
                    <Flex flexDir="column" gap="20px">
                        <Heading fontSize="25px">Adventure</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore totam odio sunt similique a architecto voluptate maxime nobis dolorum.</Text>
                    </Flex>
                </Box>            
            </Grid>
        </Flex>
    );
}

export default Content2;