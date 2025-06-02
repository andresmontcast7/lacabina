import { Box, Link as ChakraLink } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import logo from "../assets/logo/cabinaB.png";
import { MdCall } from "react-icons/md";
import { Button } from "@chakra-ui/button";
import { BsFillCalendar2DayFill } from "react-icons/bs";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import { FiMoon } from "react-icons/fi";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/menu";
import { useEffect } from "react";

function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      ml="0.5rem"
      p="1px"
      fontSize="0.9rem"
      color="yellow.400"
      onClick={toggleColorMode}
    >
      <FiMoon></FiMoon>

      {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
}

const MobileMenu = () => {
  return (
    <Menu>
      <Box>
        <MenuButton
          display={{ base: "inline-block", lg: "none" }}
          as={HamburgerIcon}
          fontSize="2rem"
          color="white"
        ></MenuButton>
      </Box>

      <MenuList>
        <MenuGroup>
          <Link href="/" passHref legacyBehavior>
            <MenuItem as="a">Home</MenuItem>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <MenuItem as="a">Fotografía</MenuItem>
          </Link>
          <Link href="/gallery" passHref legacyBehavior>
            <MenuItem as="a">Fotos</MenuItem>
          </Link>
          {/* <Link href="/" passHref legacyBehavior>
            <MenuItem as="a">Cabina Vintage</MenuItem>
          </Link> */}
          {/* <Link href="/servicios" passHref legacyBehavior>
            <MenuItem as="a">Photobooth 360</MenuItem>
          </Link> */}
          <Link href="/blogs" passHref legacyBehavior>
            <MenuItem as="a">Blogs</MenuItem>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=50236741675&text=Hola%20Me%20gustaria%20mas%20%20Info%20%F0%9F%98%80" passHref legacyBehavior>
            <MenuItem as="a">Contactanos</MenuItem>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=50236741675&text=Buenas%2C%20me%20gustaria%20angendar%20una%20fecha%20!%20%F0%9F%93%86%F0%9F%98%80" passHref legacyBehavior>
            <MenuItem as="a">Agendar Fecha</MenuItem>
          </Link>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>About</MenuItem>
          <Example></Example>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export const Header = () => {
  return (
    <Box shadow="sm" padding="3" backgroundColor="black">
      <Box
        color="white"
        pr="8"
        display="flex"
        justifyContent={{ base: "space-between", lg: "space-around" }}
        alignItems="center"
      >
        {/* LEFT */}
        <Box flexShrink="10" width="8rem">
          <Image alt="logo" src={logo}></Image>
        </Box>
        {/* MOBILE MENU */}

        <Link href="/" passHref legacyBehavior>
          <ChakraLink display={{ base: "none", lg: "inline-block" }}>Home</ChakraLink>
        </Link>
        {/* <Link href="/servicios" passHref legacyBehavior>
          <ChakraLink display={{ base: "none", lg: "inline-block" }}>
            {" "}
            Fotografía
          </ChakraLink>
        </Link> */}

        <Link href="/servicios" passHref legacyBehavior>
          <ChakraLink display={{ base: "none", lg: "inline-block" }}>
            {" "}
            Photobooth 360
          </ChakraLink>
        </Link>

        <Link href="/gallery" passHref legacyBehavior>
          <ChakraLink display={{ base: "none", lg: "inline-block" }}>Fotos</ChakraLink>
        </Link>

        {/* <Link href="/servicios" passHref legacyBehavior>
          <ChakraLink display={{ base: "none", lg: "inline-block" }}>
            {" "}
            Cabina Vintage
          </ChakraLink>
        </Link> */}
        {/* <Link href='/gallery' passHref legacyBehavior>
          <ChakraLink display={{base:"none",lg:"inline-block"}}>Eventos</ChakraLink>
        </Link> */}
        <Link href="/blogs" passHref legacyBehavior>
          <ChakraLink display={{ base: "none", lg: "inline-block" }}>Blogs</ChakraLink>
        </Link>
        
        <ChakraLink
          href="https://api.whatsapp.com/send?phone=50236741675&text=Hola%20Me%20gustaria%20mas%20%20Info%20%F0%9F%98%80"
          display={{ base: "none", lg: "inline-block" }}
          isExternal
        >
          <Button rightIcon={<MdCall />} colorScheme="yellow" variant="solid">
            Contactanos
          </Button>
        </ChakraLink>
        
        <ChakraLink
          href="https://api.whatsapp.com/send?phone=50236741675&text=Buenas%2C%20me%20gustaria%20angendar%20una%20fecha%20!%20%F0%9F%93%86%F0%9F%98%80"
          display={{ base: "none", lg: "inline-block" }}
          isExternal
        >
          {" "}
          <Button
            leftIcon={<BsFillCalendar2DayFill />}
            colorScheme="yellow"
            variant="solid"
          >
            Agendar Fecha
          </Button>
        </ChakraLink>
        
        <Box display={{ base: "none", lg: "inline-block" }}>
          <Example></Example>
        </Box>
        <MobileMenu></MobileMenu>
      </Box>
    </Box>
  );
};

export default Header;
