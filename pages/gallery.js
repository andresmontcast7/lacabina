import React, { useState, useEffect } from 'react';
import { Box, Container, Heading, Button, Flex, Text, Spinner, Center } from '@chakra-ui/react';
import { HeroPublic } from '../components/HeroPublic';
import galleryAnimation from "../assets/animations/Animation - 1704666599749.json";
import { images } from '../services/images';
import dynamic from 'next/dynamic';

// Dynamically import components to avoid SSR issues
const DynamicMasonry = dynamic(() => import('react-masonry-css'), { ssr: false });
const DynamicLightbox = dynamic(() => import('react-image-lightbox').then(mod => mod.default), { ssr: false });
const Motion = dynamic(() => import('framer-motion').then(mod => mod.motion), { ssr: false });

// Import styles
import 'react-image-lightbox/style.css';
import styles from '../styles/Gallery.module.css';

const GalleryPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
  
  // Check if we're on the client
  useEffect(() => {
    setIsClient(true);
    setFilteredImages(images);
  }, []);
  
  // Extract unique categories
  const getCategories = () => {
    const tags = images.flatMap(img => img.tags?.map(tag => tag.value) || []);
    return ['all', ...new Set(tags.filter(tag => tag))];
  };
  
  const categories = getCategories();
  
  // Filter images when active filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(
        images.filter(img => img.tags?.some(tag => tag.value === activeFilter))
      );
    }
  }, [activeFilter]);
  
  // Masonry breakpoints
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  
  // Handle lightbox navigation
  const handleImageClick = (index) => setSelectedImage(index);
  const handleClose = () => setSelectedImage(null);
  const handleMovePrev = () => {
    setSelectedImage((selectedImage + filteredImages.length - 1) % filteredImages.length);
  };
  const handleMoveNext = () => {
    setSelectedImage((selectedImage + 1) % filteredImages.length);
  };
  
  return (
    <Box minHeight="100vh" bg="yellow.50">
      <HeroPublic 
        animation={galleryAnimation}
        title="Nuestra" 
        title2="Galería" 
        desc="Explora nuestros mejores momentos capturados en eventos y celebraciones especiales."
      />
      
      <Container maxW="1400px" py={8}>
        {/* Filter buttons */}
        <Flex 
          justify="center" 
          wrap="wrap" 
          gap={3} 
          mb={10}
        >
          {categories.map((category) => (
            <Button
              key={category}
              size="md"
              borderRadius="full"
              colorScheme={activeFilter === category ? 'yellow' : 'gray'}
              variant={activeFilter === category ? 'solid' : 'outline'}
              bg={activeFilter === category ? 'yellow.400' : 'white'}
              color={activeFilter === category ? 'white' : 'gray.700'}
              borderColor="gray.300"
              onClick={() => setActiveFilter(category)}
              mb={2}
              boxShadow="sm"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
              transition="all 0.3s ease"
            >
              {category === 'all' ? 'Todos' : category}
            </Button>
          ))}
        </Flex>
        
        {/* Gallery */}
        {!isClient ? (
          <Center py={10}>
            <Spinner size="xl" color="yellow.400" thickness="4px" />
          </Center>
        ) : (
          <Box className="gallery-container">
            <DynamicMasonry
              breakpointCols={breakpointColumns}
              className={styles['masonry-grid']}
              columnClassName={styles['masonry-grid-column']}
            >
              {filteredImages.map((image, index) => (
                <Box
                  key={index}
                  className={styles['gallery-item']}
                  onClick={() => handleImageClick(index)}
                  cursor="pointer"
                  mb={5}
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'translateY(-5px)' }}
                >
                  <Box
                    position="relative"
                    overflow="hidden"
                    borderRadius="lg"
                    boxShadow="md"
                    transition="all 0.3s ease"
                    _hover={{ boxShadow: 'xl' }}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                  >
                    <Box
                      as="img"
                      src={image.src}
                      alt={image.caption || 'Gallery image'}
                      width="100%"
                      height="auto"
                      display="block"
                      transition="transform 0.5s ease"
                      _hover={{ transform: 'scale(1.05)' }}
                      loading="lazy"
                    />
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      p={4}
                      bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                      color="white"
                      opacity={0}
                      transform="translateY(20px)"
                      transition="all 0.3s ease"
                      _hover={{ opacity: 1, transform: 'translateY(0)' }}
                      className={styles['image-overlay']}
                    >
                      <Heading as="h3" size="sm" mb={2}>
                        {image.caption}
                      </Heading>
                      {image.tags && (
                        <Flex wrap="wrap" gap={2}>
                          {image.tags.map((tag) => (
                            <Text
                              key={tag.value}
                              fontSize="xs"
                              px={2}
                              py={1}
                              bg="rgba(255,255,255,0.2)"
                              borderRadius="full"
                            >
                              {tag.title}
                            </Text>
                          ))}
                        </Flex>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))}
            </DynamicMasonry>
          </Box>
        )}
        
        {/* Lightbox */}
        {isClient && selectedImage !== null && (
          <DynamicLightbox
            mainSrc={filteredImages[selectedImage].original}
            nextSrc={filteredImages[(selectedImage + 1) % filteredImages.length]?.original}
            prevSrc={filteredImages[(selectedImage + filteredImages.length - 1) % filteredImages.length]?.original}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
            imageTitle={filteredImages[selectedImage].caption}
            imageCaption={filteredImages[selectedImage].tags?.map(tag => tag.title).join(', ')}
          />
        )}
      </Container>
    </Box>
  );
};

export default GalleryPage;
