import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Content1 = () => {
    return(
        <Box w="100%" bgImage="url(bg3.jpg)" h="100vh" bgSize="cover" marginBottom="100px">
            <Box bgColor="blackAlpha.700" h="100vh" w="100%">
                <Flex justifyContent="center" alignItems="center" color="whitesmoke" flexDir="column" h="100vh" w="800px" textAlign="center" m="auto" gap="20px">
                    <Heading fontSize="40px">Welcome to Bali Angel Paradise Tour</Heading>
                    <Text fontSize="20px"> On behalf  Angel Paradise Tour Bali, we sincerely wish you the warmest welcome to the island of “GODS" Bali</Text>
                </Flex>
                
            </Box>
        </Box>
    );
}

export default Content1;