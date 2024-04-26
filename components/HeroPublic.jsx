import React from 'react'


import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Box,
    Container
  } from '@chakra-ui/react'
import { VideoHeader } from './VideoHeader'
  
import Lottie from 'lottie-react'

export const HeroPublic = ({title, title2, desc , animation}) => {
    return (
        <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 20, md: 1 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
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
                {title}
              </Text>
              <br />
              <Text as={'span'} color={'yellow.400'}>
              {title2}
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            {desc}
            {/* Nuestro Video booth 360 es la perfecta opción para bodas o cualquier tipo de evento, este servicio se destaca por su innovación, y diseño de su montaje y la asombrosa calidad de videos que te brinda.
            Ofrecemos nuestros servicios de Video Booth 360 en todo Guatemala. */}
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              {/* <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'yellow'}
                bg={'yellow.400'}
                _hover={{ bg: 'yellow.500' }}>
                Get started
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
                How It Works
              </Button> */}
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            
            <Box
              position={'relative'}
              height={ {base:"100%" , lg:'600px'} }
              rounded={'2xl'}
              width={'full'}
              overflow={'hidden'}>
             
              <Lottie animationData={animation}/>
            </Box>
          </Flex>
        </Stack>
      </Container>

      )
}
