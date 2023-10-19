"use client";
// components
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  background,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = () => {
  return <img width="150rem" src="../src/assets/logo-grande.svg" />;
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <footer className="footer">
      <Box bg={"#EBF5F8"} color={"#292929"} marginTop={"25px"}>
        <Container as={Stack} maxW={"6xl"} py={8}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>O site</ListHeader>
              <Box as="a" href={"#"}>
                Overview
              </Box>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Box as="a" href={"#"}>
                  Features
                </Box>
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>A Equipe</ListHeader>
              <Box as="a" href={"#"}>
                Sobre Nós
              </Box>
              <Box as="a" href={"#"}>
                Entrar em contato
              </Box>
              <Box as="a" href={"#"}>
                Parceirias
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Box as="a" href={"#"}>
                Cookies Policy
              </Box>
              <Box as="a" href={"#"}>
                Politica de Privacidade
              </Box>
              <Box as="a" href={"#"}>
                Termos de Seviço
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Siga-nos</ListHeader>
              <Box as="a" href={"#"}>
                Twitter
              </Box>
              <Box as="a" href={"#"}>
                Instagram
              </Box>
              <Box as="a" href={"#"}>
                LinkedIn
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={5}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.300", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.300", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Logo />
          </Flex>
          <Text pt={6} fontSize={"sm"} textAlign={"center"}>
            © 2023 Tracker.ly. All rights reserved
          </Text>
        </Box>
      </Box>
    </footer>
  );
}
