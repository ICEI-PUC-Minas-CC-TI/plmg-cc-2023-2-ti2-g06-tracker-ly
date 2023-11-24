// hooks
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import * as Yup from "yup";
import { useLogin } from "../hooks/auth";
// services
import { login } from "../services/userService";
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
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  useColorModeValue,
  Checkbox,
  Text,
  useToast,
  useDisclosure
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleLogin } = useLogin();
  const navigate = useNavigate();
  const toast = useToast();

  // restrições de login
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido!").required("Campo obrigatório!"),
    password: Yup.string()
      .min(2, "Senha muito curta!")
      .required("Campo obrigatório!"),
  });

  // abertura dos modais
  useEffect(() => {
    const atual = window.location.href;

    if (atual.split("/")[3] === "login") {
      onOpen();
    }
  }, [window.location.href]);

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
        }}
        variant={"btn1"}
      >
        Faça seu Login
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          navigate("/");
        }}
        backdropFilter={"blur(10px)"}
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader justifySelf={"center"} fontSize={"xl"}>
            Faça seu Login!
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box>
              <Formik
                initialValues={{ email: "", password: "" }}
                // validationSchema={SignupSchema}
                onSubmit={async (values) => {
                  const response = await login(
                    values.email,
                    values.password
                  );
                  
                  if (response) {
                    handleLogin(response);
                  } else {
                    toast({
                      title: "Algo deu errado.",
                      description: "",
                      status: "error",
                      duration: 9000,
                      isClosable: false,
                    });
                  }
                }}
              >
                
                <Form >
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email</FormLabel>
                      <Field
                        as={Input}
                        name="email"
                        className="form-input"
                        focusBorderColor="#B6DFD8"
                        type="email"
                        placeholder="Digite aqui..."
                      />
                    </FormControl>

                    <FormControl id="password">
                      <FormLabel>Senha</FormLabel>
                      <Field
                        as={Input}
                        name="password"
                        className="form-input"
                        focusBorderColor="#B6DFD8"
                        type="password"
                        placeholder="Digite aqui..."
                      />
                    </FormControl>

                    <Button
                        variant={"btn1"}
                        type="submit"
                        onClick={() => {
                          toast({
                            title: "Perfeito!",
                            description: "Você está logado.",
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                          });
                        }}
                      >
                        Entrar!
                    </Button>

                  </Stack>
                </Form>
              </Formik>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              mr={2}
              type="button"
              onClick={() => {
                onClose();
                navigate("/cadastro");
              }}
              size={"sm"}
            >
              <Link>Não tem uma conta? Faça seu cadastro</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
