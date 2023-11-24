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

      <Container maxW="container.lg" centerContent>
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
              O Trackerly é a sua comunidade de progresso, criada para todos que
              buscam uma plataforma dedicada a registrar suas conquistas e
              receber apoio para alcançar seus objetivos. Seja você um
              profissional ambicioso, um estudante comprometido ou alguém em
              busca de mudanças positivas, nosso ambiente é projetado para
              inspirar e motivar. De maneiras simples te ajudamos a traçar metas
              mais realistas, eliminando a frustração e a sensação de
              insuficiência tão comuns ao começar algo novo. No Trackerly,
              celebramos cada passo em direção ao sucesso, transformando
              objetivos individuais em conquistas compartilhadas. 
              <br />
              Em nosso compromisso de promover uma jornada mais leve até a constância
              acreditamos que a chave para o sucesso reside no seu senso de
              progresso. Ao unir a força da comunidade à personalização de
              metas, o Trackerly é mais do que uma plataforma; é um apoio
              constante em sua busca por uma vida mais produtiva e realizada.
              Descubra o poder do progresso compartilhado e junte-se a nós no
              caminho para o sucesso pessoal.
            </Text>
          </GridItem>
          <GridItem>
            <SimpleGrid justifyContent={"center"} m={"0"} pos={"absolute"}>
              <Text className="home-p-invite">Junte-se a nós:</Text>
              <Box className="home-btn-containter">
                <Cadastro
                  isOpen={isCadastroModalOpen}
                  openLoginModal={openCadastroModal}
                />
                <Text className="home-p-invite">OU</Text>
                <Login
                  isOpen={isLoginModalOpen}
                  openCadastroModal={openLoginModal}
                />
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
