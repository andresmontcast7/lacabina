import React from 'react';
import { 
  Box, 
  Image, 
  Heading, 
  Text, 
  Button, 
  Icon,
  useColorModeValue 
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const EnhancedInfoCards = ({ dataCard }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-10px)', boxShadow: 'xl' }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box position="relative" h="200px" overflow="hidden">
        <Image
          src={dataCard.imge}
          alt={dataCard.title}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="transform 0.5s"
          _hover={{ transform: 'scale(1.05)' }}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8))"
        />
        <Heading
          position="absolute"
          bottom="4"
          left="4"
          color="white"
          fontSize="2xl"
          fontWeight="bold"
        >
          {dataCard.title}
        </Heading>
      </Box>
      <Box p={6} flex="1" display="flex" flexDirection="column">
        <Text color="gray.600" mb={4} flex="1">
          {dataCard.desc}
        </Text>
        <Button
          colorScheme="yellow"
          size="sm"
          fontWeight="normal"
          rightIcon={<Icon as={ArrowForwardIcon} />}
          alignSelf="flex-start"
          as="a"
          href="https://api.whatsapp.com/send?phone=50236741675&text=Hola%20Me%20gustaria%20mas%20%20Info%20%F0%9F%98%80"
        >
          Saber más
        </Button>
      </Box>
    </Box>
  );
};

export default EnhancedInfoCards;
