import { Button, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar2 from './Navbar2';
import { useLocation, useNavigate } from 'react-router-dom';

const Adminpage = () => {
  const [posts, setPosts] = useState([]);

  // const location = useLocation();
  const navigate = useNavigate();

  // const postId = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchingData = async ()=>{
      try {
        
        const res = await axios.get("http://localhost:8800/backend/add");
        setPosts(res.data);
      } catch (err) {
        console.log(err)
      };
    }
    fetchingData();
  }, [])

  const handleDelete = async (id)=> {
    try {
      console.log(id);
      await axios.delete(`http://localhost:8800/backend/add/${id}`);
      navigate("/admpg");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar2 />
      <Flex w="100%" flexDir="column" gap="10px" mt="40px">
        <Heading mx="auto">Data Content</Heading>
        <TableContainer w="85%" mx="auto">
          <Table variant='striped' colorScheme='teal' >
            <Thead>
              <Tr>
                <Th>Judul</Th>
                <Th>Deskripsi</Th>
                <Th>Kode Tour</Th>
                <Th>Tujuan Wisata</Th>
                <Th>Fasilitas</Th>
                <Th>Pick-up Time</Th>
                <Th>Durasi Tour</Th>
                <Th>Harga</Th>
                <Th>Foto</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
            {posts.map((post, key) => (
              <Tr key={key}>
                <Td>{post.judul}</Td>
                <Td>{post.deskripsi}</Td>
                <Td>{post.kode_tour}</Td>
                <Td>{post.tujuan}</Td>
                <Td>{post.fasilitas}</Td>
                <Td>{post.pick_up}</Td>
                <Td>{post.durasi}</Td>
                <Td>{post.harga}</Td>
                <Td>{post.foto}</Td>
                <Td>
                  <Button colorScheme="teal">
                      {/* <i class="fa-solid fa-pen-to-square"></i> */}
                      Edit
                  </Button>
                  <Button colorScheme="red" onClick={()=>handleDelete(post.idcontent)}>
                      {/* <i class="fa-solid fa-pen-to-square"></i> */}
                      Delete
                  </Button>
                </Td>
              </Tr>
            ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
    
    
  )
}

export default Adminpage