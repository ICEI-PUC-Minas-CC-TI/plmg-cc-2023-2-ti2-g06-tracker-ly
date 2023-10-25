// hooks
import { useState } from "react";
// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Cadastro from "../components/Cadastro";
// chakra
import {
  Button,
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Center,
  Heading,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

function Presentation() {
  // LOGO
  const Logo = () => {
    return <img width="300rem" src="../src/assets/logo-sem-margem.svg" />;
  };

  // abertura dos modais
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isCadastroModalOpen, setCadastroModalOpen] = useState(false);

  const openCadastroModal = () => {
    setCadastroModalOpen(true);
    setLoginModalOpen(false);
  };

  const openLoginModal = () => {
    setCadastroModalOpen(false);
    setLoginModalOpen(true);
  };

  return (
    <>

      <Center marginTop={"40px"}>
        <Logo />
      </Center>

      <Container
        maxW="container.lg"
        centerContent
      >
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem>
            <Heading className="home-heading" size={"lg"}>
              Não basta somente fazer, <br /> tem que provar!
            </Heading>
            <Text className="home-desc" marginTop={"10px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              fuga aliquam nam dicta officiis doloremque suscipit voluptatem
              unde, ipsum inventore enim quis totam ea tempore sunt odit
              obcaecati animi saepe explicabo atque aspernatur officia
              temporibus, consequuntur eaque? Impedit distinctio assumenda
              ratione, soluta nihil cumque quo adipisci sunt itaque explicabo
              maiores nam. Ullam exercitationem repellat veniam impedit placeat
              nulla quisquam optio laboriosam expedita eius debitis,
              dignissimos, laudantium qui deleniti, ex vel voluptate! Vitae
              itaque corrupti nostrum, soluta consequatur rem blanditiis totam
              magnam dolorem in voluptate pariatur eos vero quibusdam molestias,
              perspiciatis voluptas, fuga alias tempora mollitia culpa dolorum
              id cupiditate.
            </Text>
          </GridItem>
          <GridItem>
            <SimpleGrid justifyContent={"center"} m={"0"} pos={"absolute"}>
              <Text className="home-p-invite">Junte-se a nós:</Text>
              <Box className="home-btn-containter">
                <Cadastro isOpen={isCadastroModalOpen} openLoginModal={openCadastroModal} />
                <Text className="home-p-invite">OU</Text>
                <Login isOpen={isLoginModalOpen} openCadastroModal={openLoginModal} />
              </Box>
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default Presentation;
