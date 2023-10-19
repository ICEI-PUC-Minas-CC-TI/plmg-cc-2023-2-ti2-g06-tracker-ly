"use client";
// routes
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// chakra
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { BsPersonFill } from "react-icons/bs";

// links da nav
const Links = [
  { text: "Feed", path: "/" },
  { text: "Minha Rotina", path: "/rotina" },
];

// botões de navegação
  const NavLink = (props) => {
    const { to, children } = props;
    return (
      <Link
        to={to}
        style={{
          textDecoration: "none",
          padding: "8px",
          borderRadius: "4px",
          marginRight: "8px",
        }}
      >
        {children}
      </Link>
    );
  };

// navbar
export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        className="navbar"
        bg={"#EBF5F8"}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to={"/"}>
                <div className="logo-nav-container" >
                  <img
                    className="logo-nav"
                    width="70rem"
                    src="../src/assets/logo-grande-no-text.svg"
                    alt=""
                  />
                </div>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.text} to={link.path}>
                  {link.text}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Button
              variant={"btn1"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Compartilhe seu progresso!
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={"/perfil"}>Meu Perfil</Link>
                </MenuItem>
                <MenuItem>Configurações</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.text} to={link.path}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
