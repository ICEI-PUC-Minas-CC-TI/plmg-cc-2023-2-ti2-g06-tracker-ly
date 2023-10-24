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
  Text,
  FormLabel,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

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
          <ModalHeader>Chegou a Hora!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Compartilhe o seu progresso com seus amigos!</Text>

            <Button mt={"20px"} variant={"btn1"} leftIcon={<AddIcon />}>
              Escolher foto
            </Button>

            <Text> [HÁBITO AQUI]</Text>

            <FormLabel mt={"20px"}>Descrição</FormLabel>
            
          </ModalBody>

          <ModalFooter>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Postar;
