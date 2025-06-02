import React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { BsFillCalendar2DayFill } from "react-icons/bs";

export const CallToAction = () => {
  return (
    <Box py={16} bg="gray.50">
      <Container maxW="container.md" textAlign="center">
        <Heading mb={4}>¿Listo para hacer tu evento inolvidable?</Heading>
        <Text fontSize="lg" color="gray.600" mb={8}>
          Contáctanos hoy mismo y te ayudaremos a elegir la mejor opción para tu celebración
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
          <Button
            as="a"
            href="https://api.whatsapp.com/send?phone=50236741675&text=Hola%20Me%20gustaria%20mas%20%20Info%20%F0%9F%98%80"
            size="lg"
            colorScheme="yellow"
            px={8}
            leftIcon={<PhoneIcon />}
          >
            Contactar Ahora
          </Button>
          <Button
            as="a"
            href="https://api.whatsapp.com/send?phone=50236741675&text=Buenas%2C%20me%20gustaria%20angendar%20una%20fecha%20!%20%F0%9F%93%86%F0%9F%98%80"
            size="lg"
            variant="outline"
            colorScheme="yellow"
            px={8}
            leftIcon={<Icon as={BsFillCalendar2DayFill} />}
          >
            Agendar Fecha
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
