import { Container, Text } from "@chakra-ui/react";
import React from "react";
import Content1 from "../components/Content1.jsx";
import Content2 from "../components/Content2.jsx";
import Content3 from "../components/Content3.jsx";

const Home = () => {
    return(
        <Container p="0" maxW="100%">
            <Content1 />
            <Content2 />
            <Content3 />
        </Container>
        
    );
    
}

export default Home;