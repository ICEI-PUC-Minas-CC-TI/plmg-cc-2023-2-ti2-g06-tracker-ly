// hooks
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useLogin } from "../hooks/auth";
import { Field, Form, Formik, useFormik } from "formik";
// services
import { cadastro } from "../services/userService";
// routes
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
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
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

// criar conta
const Form1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  // restrições de cadastro
  const SignupSchema = Yup.object().shape({
    userName: Yup.string().required("Insira o seu username."),
    email: Yup.string()
      .email("Email inválido!")
      .required("Insira o seu email."),
    password: Yup.string()
      .min(2, "Senha muito curta!")
      .required("Insira a sua senha"),
    date: Yup.string().required("Insira a sua data de nascimento."),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "As senhas devem ser iguais."
    ),
  });

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          date: "",
          name: "",
        }}
        //validationSchema={SignupSchema}
        onSubmit={async (values) => {
          console.log(values);
          const response = await cadastro(values).then((response) =>
            response.json().data
          );

          console.log(response);

          if (response) {
            console.log(response);
            handleLogin(response);
          }
          toast({
            title: "Algo deu errado, tente novamente.",
            description: "",
            status: "error",
            duration: 9000,
            isClosable: false,
          });
        }}
      >
        <Form>
          <Flex>
            <FormControl mr="5%" isRequired>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <Field
                as={Input}
                id="name"
                name="name"
                placeholder="Digite aqui..."
                focusBorderColor="#B6DFD8"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Field
                as={Input}
                id="username"
                name="username"
                placeholder="Digite aqui..."
                focusBorderColor="#B6DFD8"
              />
            </FormControl>
          </Flex>

          <FormControl mt="2%" isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
              placeholder={"Digite aqui..."}
              focusBorderColor="#B6DFD8"
            />
          </FormControl>

          <FormControl mt="2%" isRequired>
            <FormLabel htmlFor="email">Data de Nascimento</FormLabel>
            <Field
              as={Input}
              id="nasc"
              name="date"
              type="date"
              focusBorderColor="#B6DFD8"
            />
          </FormControl>

          <FormControl mt={"20px"} isRequired>
            <FormLabel htmlFor="password" mt="2%">
              Senha
            </FormLabel>
            <InputGroup size="md">
              <Field
                as={Input}
                name="password"
                id="password"
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Digite aqui..."
                focusBorderColor="#B6DFD8"
              />
              <InputRightElement width="4.5rem">
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

          {/* <FormControl mt={"20px"} isRequired>
            <FormLabel htmlFor="password" mt="2%">
              Confirmar senha
            </FormLabel>
            <InputGroup size="md">
              <Field
                as={Input}
                name="confirmPassword"
                id="confirmar-senha"
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Digite aqui..."
                focusBorderColor="#B6DFD8"
              />
              <InputRightElement width="4.5rem">
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
          </FormControl> */}

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
            Criar
          </Button>
        </Form>
      </Formik>
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
  const navigate = useNavigate();

  // abertura dos modais
  useEffect(() => {
    const atual = window.location.href;

    if (atual.split("/")[3] === "cadastro") {
      onOpen();
    }
  }, [window.location.href]);

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          onOpen();
          //navigate("/cadastro");
        }}
        variant={"btn1"}
      >
        Criar conta
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          navigate("/");
        }}
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
            <Box p={3}>
              {step === 1 ? <Form1 /> : <Form2 />}
              {step === 2 ? (
                <Button
                  variant="btn1"
                  // type="submit"
                  mt={"20px"}
                  type="button"
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
                type="button"
                onClick={() => {
                  setStep(step - 1);
                }}
                isDisabled={step === 1}
                variant="btn2"
              >
                Anterior
              </Button>
              <Button
                type="button"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                }}
                variant={"btn2"}
              >
                Próximo
              </Button>
            </ButtonGroup>

            <Button
              type="button"
              variant="ghost"
              mr={2}
              size={"sm"}
              onClick={() => {
                onClose();
                navigate("/login");
              }}
            >
              <Link>Já tem uma conta? Faça Login</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cadastro;
