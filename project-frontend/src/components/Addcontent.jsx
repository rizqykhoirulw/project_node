import React from 'react'
import Navbar2 from './Navbar2'
import { FormControl, FormLabel, Input, Textarea, Button, Heading, Flex } from '@chakra-ui/react'

const Addcontent = () => {
  return (
    <>
      <Navbar2/>
      <Flex w="80%" mx="auto" p="60px" flexDir="column" gap="30px">
        <Heading fontSize="30px" textAlign="center" mb="10px">Add Data</Heading>
        <FormControl>
          <FormLabel fontWeight="semibold" >Judul</FormLabel>
          <Input type="text" borderColor="blackAlpha.300"/>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Lokasi</FormLabel>
          <Input type="text" borderColor="blackAlpha.300"/>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Fasilitas</FormLabel>
          <Input type="text" borderColor="blackAlpha.300"/>
        </FormControl>
        <FormControl>
        <FormLabel fontWeight="semibold">Foto</FormLabel>
        <Button as="label" cursor="pointer" htmlFor="fileInput">
          Tambah Photo
          <Input type="file" id="fileInput" style={{ display: "none" }} />
        </Button>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Deskripsi Tour</FormLabel>
          <Textarea placeholder='Masukkan Deskripsi Tour Disini' borderColor="blackAlpha.300"/>
        </FormControl>
      </Flex>
    </>
  )
}

export default Addcontent