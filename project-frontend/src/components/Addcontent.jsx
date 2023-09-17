import React, { useState } from 'react'
import Navbar2 from './Navbar2'
import { FormControl, FormLabel, Input, Textarea, Button, Heading, Flex } from '@chakra-ui/react'
import axios from 'axios'
import Cookies from 'js-cookie';

const Addcontent = () => {
  const [formData, setFormData] = useState({
      judul: '',
      kode_tour: '',
      deskripsi: '',
      tujuan: '',
      fasilitas: '',
      pick_up: '',
      durasi: '',
      foto: null, 
      harga: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      foto: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
  
    const token = Cookies.get('access_token'); // Gantilah ini dengan cara Anda untuk mendapatkan token
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
    };
  
    const formDataToSend = new FormData();
    formDataToSend.append('judul', formData.judul);
    formDataToSend.append('kode_tour', formData.kode_tour);
    formDataToSend.append('deskripsi', formData.deskripsi);
    formDataToSend.append('tujuan', formData.tujuan);
    formDataToSend.append('fasilitas', formData.fasilitas);
    formDataToSend.append('pick_up', formData.pick_up);
    formDataToSend.append('durasi', formData.durasi);
    formDataToSend.append('foto', formData.foto); // Mengirim file gambar
    formDataToSend.append('foto', formData.harga);
  
    try {
      const response = await axios.post('http://localhost:8800/backend/add', formDataToSend, requestOptions);
      // Handle respon dari server (misalnya, tampilkan pesan sukses atau arahkan pengguna ke halaman lain)
      console.log(response.data);
    } catch (error) {
      // Tangani error (misalnya, tampilkan pesan kesalahan kepada pengguna)
      console.error(error);
    }
  };
  
  return (
    <>
      <Navbar2/>
      <Flex w="80%" mx="auto" p="60px" flexDir="column" gap="30px">
        <Heading fontSize="30px" textAlign="center" mb="10px">Add Data</Heading>
        <FormControl>
          <FormLabel fontWeight="semibold" >Judul</FormLabel>
          <Input type="text" borderColor="blackAlpha.300" value={formData.judul} onChange={handleChange} name='judul'/>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Kode Tour</FormLabel>
          <Input type="text" borderColor="blackAlpha.300" value={formData.kode_tour} onChange={handleChange}  name='kode_tour' />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Tujuan Wisata</FormLabel>
          <Input type="text" borderColor="blackAlpha.300" value={formData.tujuan} onChange={handleChange}  name='tujuan' />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Fasilitas</FormLabel>
          <Input type="text" borderColor="blackAlpha.300" value={formData.fasilitas} onChange={handleChange}  name='fasilitas' />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Foto</FormLabel>
          <Button as="label" cursor="pointer" htmlFor="fileInput">
            Tambah Photo
            <Input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange}/>
          </Button>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Waktu Pick-Up</FormLabel>
          <Input type="text" borderColor="blackAlpha.300" value={formData.pick_up} onChange={handleChange}  name='pick_up' />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Durasi</FormLabel>
          <Input type="text" borderColor="blackAlpha.300" value={formData.durasi} onChange={handleChange}  name='durasi' />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Deskripsi Tour</FormLabel>
          <Textarea placeholder='Masukkan Deskripsi Tour Disini' borderColor="blackAlpha.300" value={formData.deskripsi} onChange={handleChange}  name='deskripsi' />
        </FormControl>
        <Button type="submit" colorScheme="teal" onClick={handleSubmit} >
          Submit
        </Button>
      </Flex>
    </>
  )
}

export default Addcontent