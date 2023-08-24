import { Flex, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const designLogo = {
        alignItems: "center", 
        justifyContent:"center", 
        borderRadius: "50%",
        border: "2px",
        borderColor: "white", 
        p: "20px",
        w: "60px",  
        h: "60px", 
        cursor: "pointer"
    }

  return (
    <Flex bgColor="teal" w="100%" color="white" p="20px" flexDir="column" justifyContent="center" alignItems="center" gap="40px">

        {/* Section Logo Social Media */}
        <Flex gap="20px" justifyContent="space-evenly" w="60%" alignItems="center">
            {/* Logo Facebook */}
            <Flex flexDir="column" gap="5px" alignItems="center" justifyContent="center">
                <Flex sx={designLogo}>
                    <FontAwesomeIcon fontSize="30px" icon={faFacebookF} />
                </Flex>
                <Text>
                    Facebook
                </Text>
            </Flex>

            {/* logo Twitter */}
            <Flex flexDir="column" gap="5px" alignItems="center" justifyContent="center">
                <Flex sx={designLogo}>
                    <FontAwesomeIcon fontSize="30px" icon={faTwitter} />
                </Flex>
                <Text>
                    Twitter
                </Text>
            </Flex>

            {/* Logo Instagram */}
            <Flex flexDir="column" gap="5px" alignItems="center" justifyContent="center">
                <Flex sx={designLogo} >
                    <FontAwesomeIcon fontSize="30px" icon={faInstagram} />
                </Flex>
                <Text>
                    Instagram
                </Text>
            </Flex>

            {/* Logo Email */}
            <Flex flexDir="column" gap="5px" alignItems="center" justifyContent="center">
                <Flex sx={designLogo} >
                    <FontAwesomeIcon fontSize="30px" icon={faEnvelope} />
                </Flex>
                <Text>
                    Email
                </Text>
            </Flex>

            {/* Logo Linkedin */}
            <Flex flexDir="column" gap="5px" alignItems="center" justifyContent="center">
                <Flex sx={designLogo} >
                    <FontAwesomeIcon fontSize="30px" icon={faLinkedin} />
                </Flex>
                <Text>
                    Linkedin
                </Text>
            </Flex>
        </Flex>

        <Flex gap="20px" justifyContent="space-evenly" w="60%" alignItems="center">
            <Text>Copyright &copy; 2023 BaliBackpacker. All Rights Reserved</Text>
        </Flex>
    </Flex>
  )
}

export default Footer