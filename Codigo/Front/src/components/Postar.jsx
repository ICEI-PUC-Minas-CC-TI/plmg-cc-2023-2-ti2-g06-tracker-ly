// hooks
import { useState, useEffect } from "react";
// services
import { postar } from "../services/postService";
import { useLogin } from "../hooks/auth";
import { getRotina } from "../services/rotinaService";
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
  Select,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

function Postar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData } = useLogin();
  const [Rotinas, setRotinas] = useState([]);

  // fetch rotinas e salva em um array
  useEffect(() => {
    const fetchRotinas = async () => {
      const dataRotinas = await getRotina(userData.id);
      setRotinas(dataRotinas.data);
    };

    fetchRotinas();
  }, []);

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
            initialValues={{
              descricao: "",
              rotina: "",
              foto: "public/img.jpg",
            }}
            onSubmit={async (values) => {
              const now = new Date();
              const data = now.toISOString();

              const response = await postar(
                userData.id,
                values.descricao,
                values.foto,
                values.rotina
              );

              onClose();
              window.location.reload();
            }}
          >
            <Form>
              <ModalHeader>Chegou a Hora!</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                <Text>Compartilhe o seu progresso!</Text>

                <Box>
                  <Field
                    as={Input}
                    type="file"
                    focusBorderColor="#B6DFD8"
                    placeholder="Compartilhe seu progresso!"
                    value={null}
                  />

                  <FormControl my={"15px"}>
                    <FormLabel>Selecione o seu hábito:</FormLabel>

                    <Field
                      as={Select}
                      focusBorderColor="#B6DFD8"
                      placeholder="Selecione o hábito"
                      id="rotina"
                      name="rotina"
                    >
                      {Rotinas.map((rotina) => (
                        <option key={rotina.id} value={rotina.id}>
                          {rotina.nome}
                        </option>
                      ))}
                    </Field>
                  </FormControl>

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
