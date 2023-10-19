// routes
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant={"btn1"}>
        Faça seu Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} backdropFilter={"blur(10px)"} isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Faça seu Login!</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            asperiores praesentium ipsum, molestiae quos nesciunt corporis,
            aliquam beatae labore tenetur enim, fugiat illum. Reprehenderit
            eveniet repellendus consectetur accusamus, vitae unde.
          </ModalBody>

          <ModalFooter>
            <Button variant={"btn1"} mr={3}>
              <Link to={"/perfil"}>Pronto!</Link>
            </Button>
            <Button variant="ghost" mr={2} onClick={onClose}>
              <Link>Não tenho uma conta</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
