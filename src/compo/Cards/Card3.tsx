import React from "react";
import { Box, Flex, Image, Text, chakra } from "@chakra-ui/react";
import imag1 from "../../assets/6.jpg"


export default function Card3(){
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      paddingLeft={{ lg: '516px' }}

      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
    w= {{ lg: "30vw" }} 
      h={{ lg: "20rem" }} 
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src={imag1}
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Text
            display="block"
            fontSize="2xl"
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
الذكاء الاصطناعي
          </Text>
         
        </Box>
      </Box>
    </Flex>
  );
};

