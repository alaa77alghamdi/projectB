import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Button,
  Stack,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <chakra.header>
      <Box>
        <Flex align="center" pos="relative" justify="center" >
          <Stack textAlign="center" alignItems="center">
            <Image   src={logo} paddingTop={5}
            
            w={{ base: "50vw", md: "20vw", lg: "60vw" }}
            h={{ base: "40vh", md: "20vw", lg: "70vh" }}

            ></Image>
            <Text
              color={"black"}
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
              fontWeight="semibold"

              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            >
          
Braini
<br></br>


              <br></br>مختصين تقنية وتسوي

            
            </Text>
            <br></br>
            <Button
              bg="#f89d1d"
              size="md"
              rounded="50px"
              display={{ base: "block", md: "block" }}
              color={"white"}
              _hover={{
                bg: "#f8a633",
              }}
            >
              <Link href="/form1">اطلب خدمة </Link>
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
}
