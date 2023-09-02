import { Grid, Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, Button, ButtonGroup, Heading, Container, Flex} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Content3 = () => {
  return (
    <Container my="200px" maxW="100%">
        <Heading mb="30px" textAlign="center">Paket Tour Dan Wisata</Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}  px="80px">
            <Card maxW='sm' boxShadow="0 1px 8px 1px rgba(0, 0, 0, .1) ">
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='6'>
                    <Heading size='md' textAlign="center">Living room Sofa</Heading>
                    <Flex w="100%" justifyContent="space-between" alignItems="center">
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                        <Text fontSize='xl' spacing='5'><i class="fa-solid fa-map-location-dot"></i> Badung, Bali</Text>
                    </Flex>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='ghost' colorScheme='blue'mx="auto">
                        <Link to="/single">Detail About Tour</Link>
                    </Button>

                </CardFooter>
            </Card>
            {/* Kartu 2 */}
            <Card maxW='sm' boxShadow="0 1px 8px 1px rgba(0, 0, 0, .1) ">
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='6'>
                    <Heading size='md'  textAlign="center">Living room Sofa</Heading>
                    <Flex w="100%" justifyContent="space-between" alignItems="center">
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                        <Text fontSize='xl' spacing='5'><i class="fa-solid fa-map-location-dot"></i> Badung, Bali</Text>
                    </Flex>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='ghost' colorScheme='blue'mx="auto">
                        <Link to="/single">Detail About Tour</Link>
                    </Button>

                </CardFooter>
            </Card>
            {/* Kartu 3 */}
            <Card maxW='sm' boxShadow="0 1px 8px 1px rgba(0, 0, 0, .1) ">
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='6'>
                    <Heading size='md' textAlign="center">Living room Sofa</Heading>
                    <Flex w="100%" justifyContent="space-between" alignItems="center">
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                        <Text fontSize='xl' spacing='5'><i class="fa-solid fa-map-location-dot"></i> Badung, Bali</Text>
                    </Flex>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='ghost' colorScheme='blue'mx="auto">
                        <Link to="/single">Detail About Tour</Link>
                    </Button>

                </CardFooter>
            </Card>
            {/* Kartu 4 */}
            <Card maxW='sm' boxShadow="0 1px 8px 1px rgba(0, 0, 0, .1) ">
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='6'>
                    <Heading size='md' textAlign="center">Living room Sofa</Heading>
                    <Flex w="100%" justifyContent="space-between" alignItems="center">
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                        <Text fontSize='xl' spacing='5'><i class="fa-solid fa-map-location-dot"></i> Badung, Bali</Text>
                    </Flex>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='ghost' colorScheme='blue'mx="auto">
                        <Link to="/single">Detail About Tour</Link>
                    </Button>

                </CardFooter>
            </Card>
        </Grid>
    </Container>
  )
}

export default Content3;