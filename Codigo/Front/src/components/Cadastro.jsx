"use client";
// hooks
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
  Box,
  InputGroup,
  InputRightElement,
  Flex,
  ButtonGroup,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  ViewIcon,
  ViewOffIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

// criar conta
const Form1 = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="first-name">Nome</FormLabel>
          <Input
            id="first-name"
            placeholder="Digite aqui..."
            focusBorderColor="#B6DFD8"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="last-name">Username</FormLabel>
          <Input
            id="last-name"
            placeholder="Digite aqui..."
            focusBorderColor="#B6DFD8"
          />
        </FormControl>
      </Flex>

      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder={"Digite aqui..."}
          focusBorderColor="#B6DFD8"
        />
      </FormControl>

      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="email">Data de Nascimento</FormLabel>
        <Input
          id="date"
          type="date"
          focusBorderColor="#B6DFD8"
        />
      </FormControl>

      <FormControl mt={"20px"} isRequired>
        <FormLabel htmlFor="password" mt="2%">
          Senha
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="Digite aqui..."
            focusBorderColor="#B6DFD8"
          />
          <InputRightElement width="4.5rem">
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>

        <FormLabel htmlFor="password" mt="2%">
          Confirmar senha
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="Digite aqui..."
            focusBorderColor="#B6DFD8"
          />
          <InputRightElement width="4.5rem">
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

// responder questionario
const Form2 = () => {
  const [value, setValue] = useState("1");

  return (
    <>
      <Text fontSize={"16px"} fontWeight={"normal"}>
        Por favor, responda rapidamente esse questionário para que nós possamos
        identificar a melhor rotina pra você
      </Text>

      <FormControl mt={"30px"}>
        <FormLabel>Você se considera uma pessoa procrastinadora?</FormLabel>

        <RadioGroup onChange={setValue} value={value}>
          <Stack>
            <Radio value="1">Sim, bastante</Radio>
            <Radio value="2">Às vezes</Radio>
            <Radio value="3">Não, nem um pouco</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl mt={"20px"}>
        <FormLabel>
          Você sente dificuldades em manter hábitos e em ser uma pessoa
          disciplinada?
        </FormLabel>

        <RadioGroup onChange={setValue} value={value}>
          <Stack>
            <Radio value="1">Sim, bastante</Radio>
            <Radio value="2">Às vezes</Radio>
            <Radio value="3">Não, nem um pouco</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl mt={"20px"}>
        <FormLabel>
          Você sente dificuldades em manter hábitos e em ser uma pessoa
          disciplinada?
        </FormLabel>

        <RadioGroup onChange={setValue} value={value}>
          <Stack>
            <Radio value="1">Sim, bastante</Radio>
            <Radio value="2">Às vezes</Radio>
            <Radio value="3">Não, nem um pouco</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
    </>
  );
};

function Cadastro() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [step, setStep] = useState(1);

  return (
    <>
      <Button onClick={onOpen} variant={"btn1"}>
        Criar conta
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
        backdropFilter={"blur(10px)"}
        scrollBehavior={"inside"}
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Criar conta!</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box p={3} as="form">
              {step === 1 ? <Form1 /> : <Form2 />}
              {step === 2 ? (
                <Button
                  variant="btn1"
                  type="submit"
                  mt={"20px"}
                  onClick={() => {
                    toast({
                      title: "Perfeito!",
                      description: "Conta criada com sucesso.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Criar conta!
                </Button>
              ) : null}
            </Box>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setStep(step - 1);
                }}
                isDisabled={step === 1}
                variant="btn2"
              >
                Anterior
              </Button>
              <Button
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                }}
                variant={"btn2"}
              >
                Próximo
              </Button>
            </ButtonGroup>

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
