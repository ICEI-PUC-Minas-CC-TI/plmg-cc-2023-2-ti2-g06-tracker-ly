"use client";
// react
import { useState } from "react";
// routes
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// chakra
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  useColorModeValue,
  Checkbox,
  Text,
  HStack,
  InputGroup,
  InputRightElement,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Cadastro() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Button onClick={onOpen} variant={"btn1"}>
        Criar conta
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        backdropFilter={"blur(10px)"}
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Criar conta</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Nome</FormLabel>
                      <Input className="form-input" focusBorderColor='#B6DFD8' type="text" placeholder="Digite aqui..."/>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="username" isRequired>
                      <FormLabel>Username</FormLabel>
                      <Input className="form-input" focusBorderColor='#B6DFD8' type="text" placeholder="Digite aqui..." />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input className="form-input" focusBorderColor='#B6DFD8' type="email" placeholder="Digite aqui..." />
                </FormControl>
                <FormControl id="password" marginTop={"15px"} isRequired>
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <Input className="form-input" focusBorderColor='#B6DFD8' type={showPassword ? "text" : "password"} placeholder="Digite aqui..." />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormLabel margin={"5px"}>Confirmar senha</FormLabel>
                  <InputGroup>
                    <Input className="form-input" focusBorderColor='#B6DFD8' type={showPassword ? "text" : "password"} placeholder="Digite aqui..." />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button loadingText="Submitting" size="lg" variant={"btn1"}>
                    Criar conta!
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={2} size={"sm"} onClick={onClose}>
              <Link>Já tem uma conta? Faça Login</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cadastro;
