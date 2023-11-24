// hooks
import { useEffect, useState } from "react";
import { Field, Form, Formik, useFormik } from "formik";
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
  Container,
} from "@chakra-ui/react";

function Questionario() {
  const [value, setValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Questoes = (pergunta, respostas) => {
    return (
      <>
        <FormLabel>TESTE</FormLabel>

        <RadioGroup onChange={setValue} value={value}>
          <Stack>
            <Radio value="1">OP 1</Radio>
            <Radio value="2">OP 2</Radio>
            <Radio value="3">OP 3</Radio>
          </Stack>
        </RadioGroup>
      </>
    );
  };

  const Perguntas = [
    {
      label:
        "Quanto tempo você costuma gastar planejando antes de começar uma tarefa?",
      options: [
        { 1: "Mais de 15 minutos" },
        { 2: "Entre 5 e 15 minutos" },
        { 3: "Menos de 5 minutos" },
        { 4: "Não planejo" },
      ],
    },
    {
      label:
        "Com que frequência você verifica redes sociais enquanto trabalha ou estuda?",
      options: [
        { 1: "Nunca" },
        { 2: "Raramente" },
        { 3: "Frequentemente" },
        { 4: "Constantemente" },
      ],
    },
    {
      label: "Como você lida com prazos?",
      options: [
        { 1: "Sempre termino antes do prazo" },
        { 2: "Trabalho neles regularmente" },
        { 3: "Gosto de começar cedo, mas muitas vezes acabo adiando" },
        { 4: "Deixo para a última hora" },
      ],
    },
    {
      label: "Quando enfrenta uma tarefa desafiadora, o que costuma fazer?",
      options: [
        { 1: "Enfrento imediatamente" },
        { 2: "Procuro ajuda antes de começar" },
        { 3: "Tento começar, mas muitas vezes me distraio" },
        { 4: "Adio a tarefa o máximo possível" },
      ],
    },
    {
      label: "Você costuma fazer listas de afazeres?",
      options: [
        { 1: "Sempre, e sigo rigorosamente" },
        { 2: "Frequentemente, mas nem sempre as sigo" },
        { 3: "Às vezes" },
        { 4: "Nunca" },
      ],
    },
    {
      label: "Quão organizado é seu espaço de trabalho?",
      options: [
        { 1: "Muito organizado" },
        { 2: "Organizado, mas às vezes bagunço" },
        { 3: "Um pouco bagunçado, mas sei onde estão as coisas" },
        { 4: "Bagunçado" },
      ],
    },
    {
      label: "O que costuma fazer quando se depara com uma tarefa entediante?",
      options: [
        { 1: "Procuro uma maneira de torná-la mais interessante" },
        { 2: "Faço rapidamente para me livrar dela" },
        { 3: "Divido em partes menores e faço ao longo do tempo" },
        { 4: "Adio até o último momento" },
      ],
    },
  ];

  return (
    <>
      <Button
        variant={"btn2"}
        margin={"15px"}
        type="button"
        onClick={() => {
          onOpen();
        }}
      >
        Questionario
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
        size={"xl"}
        backdropFilter={"blur(10px)"}
        scrollBehavior={"inside"}
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalCloseButton />

          <Formik
            initialValues={Perguntas.reduce((acc, curr, index) => {
              acc[`question${index}`] = "";
              return acc;
            }, {})}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <ModalBody>
                <ModalHeader fontSize={"16px"} fontWeight={"normal"}>
                  Por favor, responda rapidamente esse questionário para que nós
                  possamos identificar a melhor rotina pra você
                </ModalHeader>

                <Box>
                  {Perguntas.map((pergunta, index) => {
                    return (
                      <Box key={index}>
                        <FormLabel>{pergunta.label}</FormLabel>

                        <Field name={`question${index}`}>
                          {({ field }) => (
                            <RadioGroup {...field} onChange={setValue}>
                              <Stack>
                                {pergunta.options.map((opcao, i) => {
                                  const key = Object.keys(opcao)[0];
                                  return (
                                    <>
                                      <Radio key={i} value={key}>
                                        {opcao[key]}
                                      </Radio>
                                    </>
                                  );
                                })}
                              </Stack>
                            </RadioGroup>
                          )}
                        </Field>
                      </Box>
                    );
                  })}
                </Box>
              </ModalBody>

              <ModalFooter>
                <ButtonGroup>
                  <Button type="submit" variant="btn2">
                    Pronto!
                  </Button>
                </ButtonGroup>
              </ModalFooter>
            </Form>
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Questionario;
