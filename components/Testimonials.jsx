import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

const testimonials = [
  {
    name: 'María García',
    role: 'Boda en Ciudad de Guatemala',
    content:
      'La cabina fotográfica fue el éxito de nuestra boda. Todos los invitados se divirtieron muchísimo y las fotos quedaron increíbles.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Carlos Mendez',
    role: 'Evento Corporativo',
    content:
      'Contratamos la Cabina 360 para nuestro evento corporativo y fue una experiencia increíble. El equipo fue muy profesional.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Laura Fuentes',
    role: 'Fiesta de Cumpleaños',
    content:
      'La cabina vintage fue perfecta para mi fiesta de cumpleaños. Las fotos tienen un estilo único y todos se llevaron un recuerdo especial.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
];

const TestimonialCard = ({ name, role, content }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={8}
      borderRadius="lg"
      boxShadow="md"
      position="relative"
      height="100%"
      borderTop="4px solid"
      borderColor="yellow.400"
    >
      <Text fontStyle="italic" color="gray.600" mb={6} fontSize="md">
        "{content}"
      </Text>
      <Box borderTop="1px solid" borderColor="gray.200" pt={4}>
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray.500">{role}</Text>
      </Box>
    </Box>
  );
};

export const Testimonials = () => {
  return (
    <Box bg="white" py={16}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={10}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            mb={4}
          >
            Lo Que Dicen Nuestros Clientes
          </Heading>
          <Text color="gray.600" maxW="2xl" mx="auto">
            Experiencias reales de quienes han disfrutado nuestros servicios
          </Text>
        </Box>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Testimonials;
