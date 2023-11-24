// hooks
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useLogin } from "../hooks/auth";
import { deletePost } from "../services/postService";
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

function Post({ id, habito, user_id, descr, data, foto }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData } = useLogin();
  const toast = useToast();

  const handleDelete = async () => {  
    const response = await deletePost(id);
    
    if (response) {
      toast({
        title: "Perfeito!",
        description: "Hábito deletado com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  
    window.location.reload();
  };

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
          <ModalCloseButton />
          <ModalHeader justifySelf={"center"} fontSize={"xl"}>
            @{userData.nome} está firme em seus objetivos!
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box>
              <Stack spacing={4}>
                <Text>{habito.nome}</Text>
                <img src={foto} alt="Foto do post" />
                {/* <Text backgroundColor={"pink"}>[INSERIR IMAGEM AQUI]</Text> */}
                <Text>{descr}</Text>
                <Text fontSize={"xs"}>{data}</Text>
              </Stack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              variant={"btn1"}
              onClick={() => {
                handleDelete();
              }}
            >
              Deletar Publicação
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Post;
