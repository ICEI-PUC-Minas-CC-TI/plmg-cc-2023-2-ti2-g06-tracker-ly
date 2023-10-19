// routes
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";
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
} from "@chakra-ui/react";

function Cadastro() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variant={"btn1"}>
        Criar conta
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} backdropFilter={"blur(10px)"} isCentered>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Criar conta</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            asperiores praesentium ipsum, molestiae quos nesciunt corporis,
            aliquam beatae labore tenetur enim, fugiat illum. Reprehenderit
            eveniet repellendus consectetur accusamus, vitae unde.
          </ModalBody>

          <ModalFooter>
            <Button variant={"btn1"} mr={3}>
              Pronto!
            </Button>
            <Button variant="ghost" mr={2} onClick={onClose}>
              Já tenho uma conta
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cadastro;
