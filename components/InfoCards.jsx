import React from 'react';
import { Image } from '@chakra-ui/image';

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';





export const InfoCards = ({dataCard}) => {
    console.log(dataCard)
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              dataCard.imge
            }
            alt="imageCard"
            objectFit="cover"
            boxSize="100%"
            objectPosition="center"
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {dataCard.title}
          </Heading>
          <Text color={'gray.500'}>
           {dataCard.desc}
          </Text>
        </Stack>
       
      </Box>
    </Center>
  )
}
