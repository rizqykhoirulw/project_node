import { Box, Card, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun, faUmbrellaBeach, faCalendarDays, faCar, faMoneyBill1Wave, faCommentSms, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Content2 = () => {
    const styleCard= {
        w:"85%", 
        display:"flex", 
        flexDir:"column", 
        gap:"20px", 
        m:"auto", 
        boxShadow:"0 1px 8px 1px rgba(0, 0, 0, .1)", 
        borderRadius:"20px",  
        p:"20px"
    };

    const styleLogo = {
        alignItems:"center", 
        justifyContent:"center", 
        borderRadius:"50%", 
        backgroundColor:"blue.500", 
        m:"auto", 
        p:"40px", 
        w:"150px", 
        h:"150px"
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
                        <FontAwesomeIcon icon={faMountainSun} color="white" fontSize="60px" />
                    </Flex>
                    <Heading textAlign="center" fontSize="25px">Adventure</Heading>
                    <Text textAlign="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore totam odio sunt similique a architecto voluptate maxime nobis dolorum.</Text>
                </Box>

                {/* Service 2 */}
                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faUmbrellaBeach} color="white" fontSize="60px" />
                    </Flex>
                    <Heading textAlign="center" fontSize="25px">Adventure</Heading>
                    <Text textAlign="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore totam odio sunt similique a architecto voluptate maxime nobis dolorum.</Text>
                </Box>

                {/* Service 3 */}
                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faCalendarDays} color="white" fontSize="60px" />
                    </Flex>
                    <Heading textAlign="center" fontSize="25px">Adventure</Heading>
                    <Text textAlign="justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nulla in cumque ducimus eius nisi atque ullam molestias dignissimos tempore! </Text>
                </Box>

                {/* Service 4 */}
                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faCar} color="white" fontSize="60px" />
                    </Flex>
                    <Heading textAlign="center" fontSize="25px">Adventure</Heading>
                    <Text textAlign="justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nulla in cumque ducimus eius nisi atque ullam molestias dignissimos tempore! </Text>
                </Box>

                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faMoneyBill1Wave} color="white" fontSize="60px" />
                    </Flex>
                    <Heading textAlign="center" fontSize="25px">Adventure</Heading>
                    <Text textAlign="justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nulla in cumque ducimus eius nisi atque ullam molestias dignissimos tempore! </Text>
                </Box>  

                <Box sx={styleCard}>
                    <Flex sx={styleLogo}>
                        <FontAwesomeIcon icon={faCommentDots} color="white" fontSize="60px" />
                    </Flex>
                    <Heading textAlign="center" fontSize="25px">Adventure</Heading>
                    <Text textAlign="justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nulla in cumque ducimus eius nisi atque ullam molestias dignissimos tempore! </Text>
                </Box>            
            </Grid>
        </Flex>
    );
}

export default Content2;