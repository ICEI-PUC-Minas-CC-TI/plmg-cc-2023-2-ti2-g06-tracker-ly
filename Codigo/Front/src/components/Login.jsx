// routes
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// formik
import { Formik, Form, Field } from "formik";
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
} from "@chakra-ui/react";


function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variant={"btn1"}>
        Faça seu Login
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        backdropFilter={"blur(10px)"}
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader justifySelf={"center"} fontSize={"xl"}>Faça seu Login!</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input className="form-input" focusBorderColor='#B6DFD8' type="email" placeholder="Digite aqui..."/>
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Senha</FormLabel>
                  <Input className="form-input" focusBorderColor='#B6DFD8' type="password" placeholder="Digite aqui..."/>
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    {/* <Checkbox>Remember me</Checkbox> */}
                    {/* <Text color={"blue.400"}>Forgot password?</Text> */}
                  </Stack>
                  <Button variant={"btn1"} type="submit" >Entrar!</Button>
                </Stack>
              </Stack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={2} onClick={onClose} size={"sm"}>
              <Link>Não tem uma conta? Faça seu cadastro</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
