import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { EnhancedInfoCards } from './EnhancedInfoCards';

export const ServicesSection = ({ dataCard }) => {
  return (
    <Box py={12} bg="gray.50">
      <Container maxW={'7xl'}>
        <Box textAlign="center" mb={12}>
          <Text
            bgGradient="linear(to-r, yellow.400, yellow.600)"
            bgClip="text"
            fontSize="sm"
            fontWeight="bold"
            textTransform="uppercase"
            mb={2}
          >
            Nuestros Servicios
          </Text>
          <Heading
            mb={4}
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            color={useColorModeValue('gray.900', 'white')}
          >
            Experiencias Únicas para Cada Ocasión
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
          >
            Descubre cómo nuestras cabinas fotográficas pueden transformar tu evento
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {dataCard.map((card, index) => (
            <EnhancedInfoCards key={index} dataCard={card} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
