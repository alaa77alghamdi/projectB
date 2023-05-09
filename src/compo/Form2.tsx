import { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,

} from "@chakra-ui/react";

// import axios from "axios";

const From2 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
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
      major
    };
    await fetch("http://localhost:3003/sendForm", {
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
 
 
 
 
  // const sendEmail = async (e: any) => {
  //   e.preventDefualt();
  //   const data = {
  //     name,
  //     email,
  //     phone,
  //     major,
  //     message,
  //   };

  //   const response = await axios.post("http://localhost:3003/sendForm", data);

  //   console.log(response.data);
  // };

  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justify="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            انضم معنا في الفريق{" "}
          </Heading>
          <Text fontSize="md" textAlign="center">
            اكتب معلوماتك وسيتم التواصل معك قريبا{" "}
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        ></Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue("white", "gray.700")}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <Stack
              w="100%"
              spacing={3}
              direction={{ base: "column", md: "row" }}
              
            >
              <FormControl id="name"
              >
                <FormLabel>الاسم</FormLabel>
                <Input
                  type="text"
                  placeholder="احمد"
                  rounded="md"
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>الايميل</FormLabel>
                <Input
                  type="email"
                  placeholder="test@test.com"
                  rounded="md"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>رقم الجوال</FormLabel>
                <Input
                  type="phone"
                  placeholder="050.."
                  rounded="md"
                  value={phone}
                  onChange={(e) => {setPhone(e.target.value)}}
                />
              </FormControl>
            </Stack>

            <FormControl id="subject">
              <FormLabel> التخصص </FormLabel>
              <Input
                type="text"
                placeholder=" تخصصك الجامعي "
                rounded="md"
                value={major}
                onChange={(e) => {setMajor(e.target.value)}}
              />
            </FormControl>
            <FormControl id="message">
              <FormLabel>معلومات اخرى </FormLabel>
              <Textarea
                size="lg"
                placeholder=""
                rounded="md"
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}
              />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="#f89d1d"
              color="white"
              _hover={{
                bg: "#f8a633",
              }}
              rounded="md"
              w={{ base: "100%", md: "max-content" }}
              type='submit'
              onClick={(e) => {
                handleSubmit(e);
              }}

            >
              ارسال{" "}
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default From2;
