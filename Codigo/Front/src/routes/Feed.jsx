// hooks
import { useEffect, useState } from "react";
// services
import { getRotina } from "../services/rotinaService";
import { useLogin } from "../hooks/auth";
//import { getPost } from "../services/postService";
import { parseFreq } from "../helpers";
// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Questionario from "../components/Questionario";
// chakra
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Box,
  Heading,
  IconButton,
  Image,
  Avatar,
  Button,
  Container,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

function Feed() {
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

  // renderiza rotinas do user
  const RotinasRend = (props) => {
    const { nome, descr, freq, hora } = props;

    return (
      <>
        <Box bg={"#EBF5F8"} px={4} py={5} rounded={"lg"} shadow={"lg"}>
          <Text fontSize={"md"}>{nome}</Text>
          <Text fontSize={"sm"}>{descr}</Text>
          <Text fontSize={"sm"}>{freq}</Text>
          <Text fontSize={"sm"}>{hora}</Text>
        </Box>
      </>
    );
  };

  // renderiza posts do usuário
  const PostsRend = (props) => {
    return (
      <>
        <Card marginBottom={"15px"} maxW="md">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar />

                <Box>
                  <Heading size="sm">
                    Marcela Aguiar - Aprendender Francês
                  </Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              30 dias de estudo autônomo de inglês! A gringa me espera!!
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://source.unsplash.com/E9NcsvbRVqo"
            alt="Chakra UI"
          />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            {/* <Button flex="1" variant="ghost">
            Like
          </Button>
          <Button flex="1" variant="ghost">
            Comment
          </Button>
          <Button flex="1" variant="ghost">
            Share
          </Button> */}
          </CardFooter>
        </Card>

        <Card marginBottom={"15px"} maxW="md">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar />

                <Box>
                  <Heading size="sm">
                    Marcela Aguiar - Aprendender Inglês
                  </Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              30 dias de estudo autônomo de inglês! A gringa me espera!!
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://source.unsplash.com/E9NcsvbRVqo"
            alt="Chakra UI"
          />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            {/* <Button flex="1" variant="ghost">
            Like
          </Button>
          <Button flex="1" variant="ghost">
            Comment
          </Button>
          <Button flex="1" variant="ghost">
            Share
          </Button> */}
          </CardFooter>
        </Card>
      </>
    );
  };

  return (
    <>
      <Nav />

      <SimpleGrid columns={2}>
        <Container
          backgroundColor={"blue"}
          height={"30rem"}
          position={"sticky"}
          margin={"40px auto"}
          top={"50px"}
        >
          <Text fontSize="30px">
            O benefício futuro é maior que o desconforto de agora!
          </Text>

          <Stack>
            {Rotinas.map((rotina) => (
              <RotinasRend
                key={rotina.id}
                nome={rotina.nome}
                descr={rotina.descr}
                freq={rotina.freq}
                hora={rotina.hora}
              />
            ))}
          </Stack>

        </Container>
        

        <Container padding={"10px"}>{PostsRend()}</Container>
      </SimpleGrid>

      <Footer />
    </>
  );
}

export default Feed;
