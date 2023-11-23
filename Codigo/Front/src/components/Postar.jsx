// services
import { postar } from "../services/postService";
import { useLogin } from "../hooks/auth";
// chakra and formik
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormLabel,
  FormControl,
  Input,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

function Postar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData } = useLogin();

  // const handleSubmit = async (values) => {
  //   const now = new Date();
  //   const data = now.toISOString();

  //   const response = await postar(userData.id, "", 1, values.descricao, data);
  // };

  return (
    <>
      <Button
        variant={"btn1"}
        size={"sm"}
        mr={4}
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        Compartilhe seu progresso!
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <Formik
            initialValues={{ descricao: "" }}
            onSubmit={async (values) => {
              const now = new Date();
              const data = now.toISOString();

              console.log("valores passados pro back:  ", userData.id,
              values.descricao)

              const response = await postar(
                values.descricao,
                1,
                1,
                userData.id
              );
            }}
          >
            <Form>
              <ModalHeader>Chegou a Hora!</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                <Text>Compartilhe o seu progresso com seus amigos!</Text>

                <Box>
                  <Text>ADICIONAR FOTO AQUI</Text>
                  {/* <FormControl my={"15px"} backgroundColor={"green"}>
                    <Field
                      as={Input}
                      type="file"
                      focusBorderColor="#B6DFD8"
                      placeholder="Compartilhe seu progresso!"
                      id="foto"
                      name="foto"
                    />
                  </FormControl> */}

                  <FormControl my={"15px"}>
                    <FormLabel>Descrição:</FormLabel>
                    <Field
                      as={Textarea}
                      focusBorderColor="#B6DFD8"
                      placeholder="Compartilhe seu progresso!"
                      id="descricao"
                      name="descricao"
                    />
                  </FormControl>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button
                  variant={"ghost"}
                  type={"button"}
                  mr={3}
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button my={"10px"} type={"submit"} variant={"btn1"}>
                  Publicar!
                </Button>
              </ModalFooter>
            </Form>
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Postar;
