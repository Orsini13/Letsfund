import React from 'react'
import './search.css'
import { HStack } from '@chakra-ui/react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";



const Search = () => {
  return (
    <HStack
      bg={"white"}
      boxShadow={"lg"}
      px={"10px"}
      py={"5px"}
      rounded={"md"}
      w={["300px", "300px", "800px"]}
      alignItems={"center"}
      gap={2}
    >
      <CiSearch color="green.400" />
      <input type="text" placeholder="search" />
    </HStack>
  );
}

export default Search