import React from "react";
import { Box, Flex, Image, Stack, Text, chakra } from "@chakra-ui/react";
import imag1 from "../../assets/4.jpg"

export default function Card1(){
  return (
    <>

<Stack textAlign="center" alignItems="center" spacing={5}  paddingTop="40px" 
>
            <Text
              fontSize="40px"
              fontWeight="semibold"
              color="black"
            
             
            >
<br></br>


              خدماتنا{" "}
             
            </Text>
            </Stack>
    
    <Flex
      bg="#f2f3f5"
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
            
             تطوير
البرمجيات
          </Text>
          <chakra.span
            fontSize="sm"
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
        
          </chakra.span>
        </Box>
      </Box>
    </Flex>
    </>
  );
};

