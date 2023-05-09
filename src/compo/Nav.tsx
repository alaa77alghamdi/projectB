import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  // MenuButton,
  // MenuList,
  MenuItem,
  Stack,
 
  IconButton,
  useDisclosure,
  useColorModeValue,
  Image,
 
  chakra,
} from "@chakra-ui/react";
("react-router-dom");

// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import { BiChevronDown } from "react-icons/bi";
import {animateScroll as scroll} from 'react-scroll';
import logo from "../assets/logo.jpg";
import React from "react";


const navLinks = [
  { name: "تواصل معنا", path: "/contactus" },
  { name: "من نحن", path: "/aboutus" },
];

const dropdownLinks = [
  {
    name: "تطوير الرمجيات",
    path: "",
  },
  {
    name: "معالجة البيانات وادخالها",
    path: "",
  },
  {
    name: "الذكاء الاصطناعي",
    path: "",
  },
  {
    name: "الأمن السيبراني",
    path: "",
  },
  {
    name: "استشارات  تقنية",
    path: "",
  },
  {
    name: "خدمات تقنية",
    path: "",
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

 

  return (
    <React.Fragment>
     

      <Box px={4} bg={useColorModeValue("#4c3594", "gray.800")}>
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
        >
          <chakra.a href="/" display="flex" alignItems="center">
            <Image
              src={logo}
              flexShrink={0}
              h={50}
              w={50}
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
              rounded="30px"
            ></Image>
          </chakra.a>
          <HStack spacing={8} alignItems="center" color={"white"}>
            <HStack
              as="nav"
              spacing={12}
              display={{ base: "none", md: "flex" }}
              alignItems="center"
            >
              {/* Dropdown Menu */}
              <Menu autoSelect={false} isLazy>
                {/* {({ isOpen, onClose }) => ( */}
                  <>
                  <Link
                  _hover={{
                    color: "#3182ce",
                  }}
                  onClick={()=>scroll.scrollTo(500)}>خدماتنا</Link>
                    {/* <MenuButton _hover={{ color: "blue.400" }}> */}
                      {/* <Flex alignItems="center"> */}
                        {/* <Button onClick={()=>scroll.scrollToBottom()}>خدماتنا</Button> */}
                        
                        {/* <Icon
                          as={BiChevronDown}
                          h={5}
                          w={5}
                          ml={1}
                          transition="all .25s ease-in-out"
                          transform={isOpen ? "rotate(180deg)" : ""}
                        /> */}
                      {/* </Flex> */}
                    {/* </MenuButton> */}
                    {/* <MenuList
                      zIndex={5}
                      bg={useColorModeValue(
                        "rgb(255, 255, 255)",
                        "rgb(26, 32, 44)"
                      )}
                      border="none"
                      boxShadow={useColorModeValue(
                        "2px 4px 6px 2px rgba(160, 174, 192, 0.6)",
                        "2px 4px 6px 2px rgba(9, 17, 28, 0.6)"
                      )}
                      color={"black"}
                    >
                      {dropdownLinks.map((link, index) => (
                        <MenuLink
                          key={index}
                          name={link.name}
                          path={link.path}
                          onClose={onClose}
                        />
                      ))}
                    </MenuList> */}
                  </>
                {/* )} */}
              </Menu>
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </HStack>
          </HStack>

          <Button
            bg="#f89d1d"
            color="white"
            _hover={{
              bg: "#f8a633",
            }}
            size="md"
            rounded="md"
            display={{ base: "none", md: "block" }}
          >
            <Link href="/form2">انضم معنا</Link>
          </Button>

          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={{ base: "inherit", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg="#f89d1d" 
          />
        </Flex>

        {/* Mobile Screen Links */}
        {isOpen ? (
          <Box pb={4} display={{ base: "inherit", md: "none" }} >
            <Stack as="nav" spacing={2} color="white" >
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose}   />
              ))}

              <Link fontWeight="semibold" color="white" href="/form2">
                انضم معنا
              </Link>

              <Text onClick={()=>scroll.scrollTo(2000)}>خدماتنا :</Text>
              <Stack pl={2} spacing={1} mt={"0 !important"} >
                {dropdownLinks.map((link, index) => (
                  <NavLink key={index} {...link} onClose={onClose} />
                ))}
              </Stack>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </React.Fragment>
  );
}

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("blue.500", "blue.200"),
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

// Dropdown MenuLink Component
interface MenuLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem
        _hover={{
          color: "black",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        <Text>{name}</Text>
      </MenuItem>
    </Link>
  );
};
