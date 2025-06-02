import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon, PhoneIcon } from '@chakra-ui/icons';
import { BsFillCalendar2DayFill } from "react-icons/bs";

export const EnhancedVideoHeader = ({ video, autoPlay = true, loop = true }) => {
  return (
    <Box position="relative" height="90vh" width="100%">
      {/* Video de fondo */}
      <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="0">
        <video 
          width="100%" 
          height="100%" 
          muted 
          loop={loop} 
          autoPlay={autoPlay} 
          src={video} 
          style={{ objectFit: "cover", width: "100%", height: "100%" }} 
        />
        <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(0,0,0,0.4)" />
      </Box>
      
      {/* Contenido superpuesto */}
      <Container maxW="container.xl" position="relative" zIndex="1" height="100%" centerContent>
        <Stack
          spacing={6}
          w={'full'}
          maxW={'lg'}
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          textAlign="center"
        >
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            color="white"
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'yellow.400',
                zIndex: -1,
              }}>
              La Cabina
            </Text>
            <br />
            <Text as={'span'} color={'yellow.400'}>
              Momentos Inolvidables
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
            Haz que tu evento sea único con nuestras cabinas fotográficas en Guatemala
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
            <Button
              as="a"
              href="https://api.whatsapp.com/send?phone=50236741675&text=Hola%20Me%20gustaria%20mas%20%20Info%20%F0%9F%98%80"
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'yellow'}
              bg={'yellow.400'}
              _hover={{ bg: 'yellow.500' }}
              leftIcon={<PhoneIcon />}
            >
              Contactar Ahora
            </Button>
            <Button
              as="a"
              href="https://api.whatsapp.com/send?phone=50236741675&text=Buenas%2C%20me%20gustaria%20angendar%20una%20fecha%20!%20%F0%9F%93%86%F0%9F%98%80"
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              variant="outline"
              color="white"
              borderColor="white"
              _hover={{ bg: 'rgba(255,255,255,0.2)' }}
              leftIcon={<Icon as={BsFillCalendar2DayFill} />}
            >
              Agendar Fecha
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default EnhancedVideoHeader;
