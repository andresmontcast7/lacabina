"use client";

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useFetch } from "../../src/hooks/useFetch";
import { useEffect, useState } from "react";
import { BlogAuthor } from "../../components/blog/blogAuthor";
import { Seo } from "../../components/Seo/Seo";
import { useFetchBlog } from "../../src/hooks/useFetchBlog";

const ArticleList = () => {
  const router = useRouter()
  const path = router?.asPath?.replace('/blogs/','')
   const {data:slug , loding:slugLoding } = useFetch(`https://strapi-production-935c.up.railway.app/api/blogs?filters\[slug\][$eq]=${path}`)

  const { data, loding:dataLoding } = useFetch(
    `https://strapi-production-935c.up.railway.app/api/blogs/${slug?.data[0]?.id}?populate=*`
  )
  const imgBody = data?.data?.attributes?.img?.data?.attributes?.url
  const canonicalUrl = useRouter().asPath;
  const [imgeAuthor, setimgeAuthor] = useState(null)
  const [dataBlog, setDataBlog] = useState(null)

  const { data:fetcheBlog, images} = useFetchBlog(`https://strapi-production-935c.up.railway.app/api/blogs?filters\[slug\][$eq]=`,path)

console.log()

  return (
    <Container maxW={"7xl"} p="12">
      <Seo
        title={fetcheBlog?.data[0]?.attributes?.title}
        description={data?.data?.attributes?.title}
        url={canonicalUrl}
      ></Seo>
      <Heading as="h1"> Blog by {fetcheBlog?.data[0]?.attributes?.author} 👋 </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  images.data?.attributes?.img?.data[0]?.attributes?.url  
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              {fetcheBlog?.data[0]?.attributes?.title}
            </Text>
          </Heading>
          {fetcheBlog?.data[0]?.attributes.introduction[0].children.map((intro, i)=>(
            <Text key={i}
             as="p"
             marginTop="2"
             fontSize="lg"
            > {intro.text}</Text>
          ))}

          <BlogAuthor
            author={fetcheBlog?.data[0]?.attributes?.author}
            imgAuth={images.data?.attributes?.authorImg?.data[0].attributes.url}
            date={fetcheBlog?.data[0]?.attributes?.publish}
          />
        </Box>
      </Box>
      {/* <Heading as="h2" marginTop="5">
        Latest articles
      </Heading> */}
      <Divider marginTop="5" />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">{fetcheBlog?.data[0]?.attributes?.bodyTitle}</Heading> 
        {fetcheBlog?.data[0]?.attributes?.body.map((value) => (
          <Text as="p" fontSize="lg" key={value}>
            {" "}
            {value.children[0].text}{" "}
          </Text>
        ))}
      </VStack>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Conclusion</Heading>
        {fetcheBlog?.data[0]?.attributes?.conclusion.map((conclusion, i) => (
          <Text as="p" fontSize="lg" key={i}>
            {conclusion.children[0].text}
          </Text>
        ))}
      </VStack>
    </Container>
  );
};

export default ArticleList;
