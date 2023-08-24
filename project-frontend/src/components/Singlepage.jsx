import { Box, Grid, GridItem, Flex, Text, Heading, Image, Divider, ListItem, UnorderedList, Card, CardBody, CardHeader, CardFooter, Button } from '@chakra-ui/react';
import React from 'react';

const Singlepage = () => {
  return (
    <>
        <Box w="100%" bgImage="url(bg1.jpg)" h="70vh" bgSize="cover" marginBottom="20px">
            <Box bgColor="blackAlpha.800" h="70vh" w="100%">
                <Flex justifyContent="center" alignItems="center" color="whitesmoke" flexDir="column" h="70vh" w="800px" textAlign="center" m="auto" gap="20px">
                    <Heading fontSize="40px">Paket Tour Pertama</Heading>
                    {/* <Text fontSize="20px"> On behalf  Angel Paradise Tour Bali, we sincerely wish you the warmest welcome to the island of “GODS" Bali</Text> */}
                </Flex>
                
            </Box>
        </Box>
        <Grid templateColumns='repeat(3, 1fr)'>
            <GridItem colSpan={2} p="100px">
                <Box w="100%" mb="20px">
                    <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    borderRadius="lg"
                    />
                </Box>
                <Flex flexDir="column" gap="20px">
                    <Text fontSize="20px" color="grey">
                        <i class="fa-solid fa-location-dot"></i> Jl. Belimbing, Pondok Tanggulangin Asri, Tanggulangin, Sidoarjo
                    </Text>
                    <Heading>
                        Danau Bedugul
                    </Heading>
                    <Divider />
                </Flex>
                <Flex gap="20px" flexDir="column" mt="20px">
                    <Heading fontSize="25px">Description</Heading>
                    <Text color="grey" fontSize="18px" textAlign="justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis debitis libero, minima consequuntur omnis sapiente tempora quo ut voluptatem at ullam laudantium iste provident et porro illum illo voluptatibus quisquam aliquam. Magni fugit eius consectetur voluptate? Voluptatibus ad rerum sint est porro quos sunt, veniam possimus velit, nam dolorem officia!</Text>
                    <Heading fontSize="20px">Fasilitas: </Heading>
                    <UnorderedList spacing={3} color="grey" fontSize="18px">
                        <ListItem>
                            Lorem ipsum dolor sit amet.
                        </ListItem>
                        <ListItem>
                            Lorem ipsum dolor sit amet.
                        </ListItem>
                        <ListItem>
                            Lorem ipsum dolor sit amet.
                        </ListItem>
                        <ListItem>
                            Lorem ipsum dolor sit amet.
                        </ListItem>
                    </UnorderedList>
                </Flex>
            </GridItem>
            <GridItem py="100px" pr="100px">
                <Card align='center' pos="sticky" top="200px">
                    <CardHeader>
                        <Heading size='xl'> <i class="fa-solid fa-dollar-sign"></i> 250</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme='blue'>View here</Button>
                    </CardFooter>
                </Card>
            </GridItem>

        </Grid>
    </>
  )
}

export default Singlepage