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
import imag1 from "../assets/248.jpg";
import { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      phone,
      message,
    };
    await fetch("http://localhost:3003/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    });
  };
  return (
    <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt="Cover image"
          objectFit="cover"
          src={imag1}
          display={{ base: "none", lg: "block" }}
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
                <Input
                  rounded="md"
                  type="name"
                  value={name}
                  onChange={(e) => {setName(e.target.value); }}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>الايميل</FormLabel>
                <Input
                  rounded="md"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl id="phone">
                <FormLabel>رقم الجوال</FormLabel>
                <Input
                  rounded="md"
                  type="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl id="message">
                <FormLabel>معلومات اخرى </FormLabel>
                <Textarea
                  size="lg"
                  placeholder=""
                  rounded="md"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
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
                onClick={(e) => {
                  handleSubmit(e);
                }}
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

export default ContactUs;
