// services
import { postar } from "../services/postService";
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
          <Formik initialValues={{ descricao: "" }}>
            <Form>
              <ModalHeader>Chegou a Hora!</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                <Text>Compartilhe o seu progresso com seus amigos!</Text>

                <Box>
                  <Button mt={"20px"} variant={"btn2"} leftIcon={<AddIcon />}>
                    Escolher foto
                  </Button>

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
                <Button variant={"ghost"} mr={3} onClick={onClose}>
                  Cancelar
                </Button>

                <Button my={"10px"} variant={"btn1"}>
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
