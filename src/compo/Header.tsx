import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import header from "../assets/header.jpg";

export default function Header() {
  const bg = useColorModeValue("white", "gray.400");

  return (
    <chakra.header>
      <Box
        w="full"
        h="container.sm"
        backgroundImage={header}
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.500"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              Braini{" "}
              <chakra.span color="blue.400" textDecor="underline"></chakra.span>
            </Heading>

            <Text
              color={"white"}
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            >
              <br></br> نحن Braini الكيان التقني نقدم حلول
              <br></br>وخدمات تقنية في كل المجالات التقنية منها:
              <br></br>تطوير البرمجيات، وعلم البيانات، والذكاء
              <br></br>الاصطناعي، والامن السيبراني وتقديم
              <br></br>الاستشارات التقنية بمختلف أنواعها
            </Text>
            <Button
              bg="#f89d1d"
              size="md"
              rounded="50px"
              display={{ base: "block", md: "block" }}
              color={"white"}
              _hover={{
                bg: '#f8a633'
              }}
            >
              <Link href="/form1">ابدا مشروعك</Link>
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
}
