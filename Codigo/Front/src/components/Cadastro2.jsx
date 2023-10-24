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
  GridItem,
  Box,
  useColorModeValue,
  Checkbox,
  Text,
  HStack,
  InputGroup,
  InputRightElement,
  Flex,
  Heading,
  Progress,
  ButtonGroup,
  Select,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

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

      <FormControl isRequired>
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
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="#B6DFD8"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="#B6DFD8"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="#B6DFD8"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="#B6DFD8"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

function Cadastro2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50.0);

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
          <ModalHeader>Criar conta!</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box
              p={6}
              as="form"
            >
              <Progress value={progress} mb="5%" ></Progress>
              {step === 1 ? <Form1 /> : <Form2 />}
              <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Flex>
                    <Button
                      onClick={() => {
                        setStep(step - 1);
                        setProgress(progress - 50.0);
                      }}
                      isDisabled={step === 1}
                      colorScheme="teal"
                      variant="btn2"
                      w="7rem"
                      mr="5%"
                    >
                      Anterior
                    </Button>
                    <Button
                      w="7rem"
                      isDisabled={step === 2}
                      onClick={() => {
                        setStep(step + 1);
                        if (step === 2) {
                          setProgress(100);
                        } else {
                          setProgress(progress + 50.0);
                        }
                      }}
                      variant={"btn2"}
                    >
                      Próximo
                    </Button>
                  </Flex>
                  {step === 2 ? (
                    <Button
                      w="7rem"
                      colorScheme="red"
                      variant="btn1"
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
                      Pronto!
                    </Button>
                  ) : null}
                </Flex>
              </ButtonGroup>
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

export default Cadastro2;
