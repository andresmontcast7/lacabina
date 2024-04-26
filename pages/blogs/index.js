import React from "react";
import { BlogCard } from "../../components/BlogCard";
import { HeroPublic } from "../../components/HeroPublic";
import blogAnimation from "../../assets/animations/blogAnimatio.json";
import { blogContent } from "../../services/blog/blogPage";
import { Box, Container } from "@chakra-ui/react";
import { useFetch } from "../../src/hooks/useFetch";
import { Link } from "@chakra-ui/react";
import * as NextLink from "next/link";
import { Stack } from "@chakra-ui/react";

const Blogs = () => {
  const { title, title2, desc } = blogContent;
  const { data, loding, error } = useFetch("https://strapi-production-935c.up.railway.app/api/blogs?populate=*");

  console.log(data)

  return (
    <Container maxW={"7xl"}>
      <HeroPublic
        animation={blogAnimation}
        title={title}
        title2={title2}
        desc={desc}
      />
      <Stack direction={["column", "row"]}  display={"flex"} justifyContent={"center"} flexFlow={"wrap"} spacing="24px">
        {data?.data.map((body) => (
          <Box key={body.attributes.id}>
            <NextLink
              key={body.attributes.id}
              href={`/blogs/${body.attributes.slug}`}
              passHref
            >
              <Link>
                <BlogCard
                  title={body.attributes.title}
                  date={body.attributes.publish}
                  author={body.attributes.author}
                  img={body?.attributes?.img.data[0]?.attributes?.url}
                  authImg={body?.attributes?.authorImg?.data[0]?.attributes?.url}
                />
              </Link>
            </NextLink>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Blogs;
