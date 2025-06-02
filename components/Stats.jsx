import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const stats = [
  { number: '500+', label: 'Eventos Realizados' },
  { number: '15k+', label: 'Fotos Tomadas' },
  { number: '98%', label: 'Clientes Satisfechos' },
  { number: '13', label: 'Tipos de Cabinas' },
];

export const Stats = () => {
  return (
    <Box bg="yellow.400" py={12}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} textAlign="center">
          {stats.map((stat, index) => (
            <Box key={index}>
              <Text fontSize="6xl" fontWeight="bold" color="white">
                {stat.number}
              </Text>
              <Text fontSize="xl" color="white">
                {stat.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Stats;
