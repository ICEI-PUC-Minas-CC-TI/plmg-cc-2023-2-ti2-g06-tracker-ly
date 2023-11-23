// hooks
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useLogin } from "../hooks/auth";
// services
import { login } from "../services/userService";
// chakra e formik
import { Formik, Form, Field } from "formik";
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
  useDisclosure,
} from "@chakra-ui/react";

function Post({ id, habito, user_id, descr, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData } = useLogin();

  console.log(userData);

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
        }}
        variant={"btn2"}
      >
        Veja mais
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
        backdropFilter={"blur(10px)"}
        size={"xl"}
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader justifySelf={"center"} fontSize={"xl"}>
            @{userData.nome} está firme em seus objetivos!
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box>
              <Stack spacing={4}>
                <Text>{habito.nome}</Text>
                <Text backgroundColor={"pink"}>[INSERIR IMAGEM AQUI]</Text>
                <Text>{descr}</Text>
                <Text fontSize={"xs"} >{data}</Text>
              </Stack>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Post;
