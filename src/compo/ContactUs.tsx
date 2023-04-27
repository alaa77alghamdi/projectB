import * as React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import imag1 from "../assets/248.jpg"
const SplitWithImage = () => {
  return (
    <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
      <Flex flex={1}>
        <Image
     
          alt="Cover image"
          objectFit="cover"
          src={ imag1 }
          display={{ base: "none" ,lg:"block"}}
        />
      </Flex>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">تواصل معنا</Heading>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="name">
                <FormLabel>الاسم</FormLabel>
                <Input rounded="md" type="name" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>الايميل</FormLabel>
                <Input rounded="md" type="email" />
              </FormControl>

              <FormControl id="phone">
                <FormLabel>رقم الجوال</FormLabel>
                <Input rounded="md" type="phone" />
              </FormControl>

              <FormControl id="message">
                <FormLabel>معلومات اخرى </FormLabel>
                <Textarea size="lg" placeholder="" rounded="md" />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%"></Stack>
              <Button
               bg="#f89d1d"
               color="white"
               _hover={{
                 bg: "#f8a633",
               }}
                rounded="md"
                w="100%"
              >
             ارسال 
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default SplitWithImage;
