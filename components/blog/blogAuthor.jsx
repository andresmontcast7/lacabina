import { Image, Text, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const BlogAuthor = ({author, imgAuth, date}) => {


  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={imgAuth}
        alt={`Avatar of ${"author"}`}
      />
      <Text fontWeight="medium">{author}</Text>
      <Text>—</Text>
      <Text>{date}</Text>
    </HStack>
  );
};
