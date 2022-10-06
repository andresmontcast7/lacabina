import { Box, Link } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import logo from '../assets/logo/cabinaB.png';
import { MdCall } from "react-icons/md";
import { Button} from "@chakra-ui/button";
import {BsFillCalendar2DayFill} from 'react-icons/bs';
import {HamburgerIcon} from '@chakra-ui/icons'
import { useColorMode } from "@chakra-ui/color-mode";
import {FiMoon} from "react-icons/fi"
import * as NextLink from 'next/link';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider
} from '@chakra-ui/menu';
import  { useEffect } from 'react';





function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
     <Button  ml="0.5rem" p="1px" fontSize="0.9rem" color="yellow.400"   onClick={toggleColorMode}>
       <FiMoon  ></FiMoon>
        
      {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> 
   
  )

 
}

const MobileMenu = ()=>{
 
  return (
   
    <Menu>
    <Box>
    <MenuButton display={{base:"inline-block", lg:"none"}}  as={HamburgerIcon} fontSize="2rem"  color="white">
  </MenuButton>
    </Box>
   
  <MenuList >
    <MenuGroup >
      <NextLink href="/" passHref>
      <MenuItem  >Home</MenuItem>
      </NextLink>
      <NextLink href="/servicios">
      <MenuItem>Videos & Servicos </MenuItem>
      </NextLink>
      
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
    <MenuItem>About</MenuItem>
     <Example></Example>
    </MenuGroup>
  </MenuList>
</Menu>
   

  )
}




export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    toggleColorMode()
    
   }, []);
   
  return (
 <Box shadow="sm" padding="3"  backgroundColor="black"  >
 <Box color="white"  pr="8"  display="flex" justifyContent={{base:"space-between", lg:"space-around"}}  alignItems="center">
    {/* LEFT */}
    <Box  flexShrink="10" width="8rem">
     <Image alt="logo" src={logo}></Image>

    </Box>
          {/* MOBILE MENU */}
        
    
    <NextLink href="/" passHref>
    <Link   display={{base:"none", lg:"inline-block" }}>Home</Link>
    </NextLink>
   
  <NextLink href='/servicios' passHref >
    <Link   display={{base:"none",lg:"inline-block"}}> Videos & Servicos</Link>
    </NextLink>
    <NextLink  href='/servicios' passHref >
    <Link   display={{base:"none",lg:"inline-block"}}>About</Link>
    </NextLink>
    <Link href="https://api.whatsapp.com/send?phone=50254446684&text=Hola%20Me%20gustaria%20mas%20%20Info%20%F0%9F%98%80"   display={{base:"none",lg:"inline-block"}}><Button rightIcon={<MdCall />} colorScheme='yellow' variant='solid'>
    Contactanos
  </Button></Link>
    <Link  href="https://api.whatsapp.com/send?phone=50254446684&text=Buenas%2C%20me%20gustaria%20angendar%20una%20fecha%20!%20%F0%9F%93%86%F0%9F%98%80"   display={{base:"none",lg:"inline-block" }}> <Button leftIcon={<BsFillCalendar2DayFill />} colorScheme='yellow' variant='solid'>
    Agendar Fecha
  </Button></Link>
  <Box display={{base:"none", lg:"inline-block"}} >
  <Example ></Example>
  </Box>
  <MobileMenu ></MobileMenu> 

    </Box>
  
    </Box>
   
  );
};


export default Header;