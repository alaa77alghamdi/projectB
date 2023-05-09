import { Fragment, useState } from "react";
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
  Text
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons

const Form1 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [projectName, setProjectName] = useState("");
  const [Information, setInformation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // const sendEmail = async (e: any) => {
  //   e.preventDefualt();
  //   const data = {
  //     name,
  //     email,
  //     phone,
  //     service,
  //     projectName,
  //     Information,
  //   };

  //   const response = await axios.post("http://localhost:3003/sendForm1", data);

  //   console.log(response.data);
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      phone,
      service,
      projectName,
      Information,
    };
    await fetch("http://localhost:3003/sendForm1", {
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
        setService("");
        setInformation("");
        setProjectName("");
      }
    });
  };

  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justify="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            اطلب خدمه{" "}
          </Heading>
          <Text fontSize="md" textAlign="center">
            اكتب معلومات الخدمه وسيتم التواصل معك قريبا{" "}
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
              <FormControl id="name">
                <FormLabel>اسم العميل او الشركه</FormLabel>
                <Input
                  type="text"
                  placeholder="احمد"
                  rounded="md"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>الايميل</FormLabel>
                <Input
                  type="email"
                  placeholder="test@test.com"
                  rounded="md"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>رقم الجوال</FormLabel>
                <Input
                  type="phone"
                  placeholder="050.."
                  rounded="md"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>نوع الخدمه </FormLabel>
              <Input
                type="text"
                placeholder=" امن سيبراني 'مثال'"
                rounded="md"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                }}
              />
            </FormControl>
            {/* <FormControl id="subject">
              <FormLabel>اسم المشروع </FormLabel>
              <Input
                type="text"
                placeholder="اسم مشروعك "
                rounded="md"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </FormControl> */}
            <FormControl id="message">
              <FormLabel>معلومات اخرى عن الخدمه</FormLabel>
              <Textarea
                size="lg"
                placeholder=""
                rounded="md"
                value={Information}
                onChange={(e) => {
                  setInformation(e.target.value);
                }}
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

export default Form1;
