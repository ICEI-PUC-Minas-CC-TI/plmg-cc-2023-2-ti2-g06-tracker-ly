// hooks
import { useEffect, useState } from "react";
import { Field, Form, Formik, useFormik } from "formik";
import { getChatGpt } from "../services/recomendService";
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

const sendMessage = (userInput, setMessages) => {
  getChatGpt(userInput)
    .then((response) => {
      const data = response.data;
      const botReply = data.choices[0].message.content.trim();

      // Filtros pós-processamento e restrições na saída
      const respostaFiltrada = filtrarResposta(botReply);

      // Exibe a resposta do bot apenas se não for filtrada
      if (respostaFiltrada) {
        displayMessage(respostaFiltrada, "bot");

        // update messages
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: respostaFiltrada, sender: "bot" },
        ]);
      }
    })
    .catch((error) => console.error("Erro ao chamar a API do GPT-3:", error));
};

const filtrarResposta = (resposta) => {
  // Adapte a lógica de filtragem conforme necessário
  const palavrasChave = [
    "hábito",
    "saúde",
    "rotina",
    "Rotina",
    "Comportamento",
    "Costume",
    "Prática",
    "Conduta",
    "Mania",
    "Vício",
    "Costume",
    "Modo",
    "Maneira",
    "Bem-estar",
    "Condicionamento",
    "Fitness",
    "Nutrição",
    "Vitalidade",
    "Cuidado",
    "Higiene",
    "Fortalecimento",
    "Equilíbrio",
    "Resiliência",
    "Programação",
    "Sequência",
    "Roteiro",
    "Agenda",
    "Cronograma",
    "Regularidade",
    "Padrão",
    "Prática diária",
    "Procedimento",
    "Ritmo",
  ];

  // Verifica se a resposta contém pelo menos uma palavra-chave
  if (
    palavrasChave.some((palavra) => resposta.toLowerCase().includes(palavra))
  ) {
    return resposta;
  } else {
    return "Isso é um assunto não relacionado ao site, não tenho a permissão para respondê-lo!"; // Retorna null para indicar que a resposta foi filtrada
  }
};

const displayMessage = (message, sender) => {
  return (
    <>
      <Text>{message}</Text>
    </>
  );
};

function Recomendacao() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [messages, setMessages] = useState([]);

  return (
    <>
      <Button onClick={onOpen} variant={"btn2"} marginRight={"20px"}>
        Recomendações
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
        <Formik
          initialValues={{ userInput: "" }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            sendMessage(values.userInput, setMessages);
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: values.userInput, sender: "user" },
            ]);
            resetForm();
            setSubmitting(false);
          }}
        >
          <Form>
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <ModalHeader>
                  Faça uma pergunta para o nosso sistema de IA e planeje bem a
                  sua rotina!
                </ModalHeader>

                <Box className="chat-container">
                  {messages.map((message, index) => (
                    <Text key={index} className={message.sender}>
                      {message.text}
                    </Text>
                  ))}
                </Box>
              </ModalBody>

              <ModalFooter>
                <FormControl>
                  <Field
                    as={Input}
                    id="userInput"
                    name="userInput"
                    placeholder="Digite aqui..."
                  />
                </FormControl>
                <Button type="submit" variant={"btn2"}>
                  Enviar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Form>
        </Formik>
      </Modal>
    </>
  );
}

export default Recomendacao;
