// hooks
import { useEffect, useState } from "react";
// services
import { getRotina } from "../services/rotinaService";
import { useLogin } from "../hooks/auth";
import { getPost } from "../services/postService";
import { parseFreq } from "../helpers";
// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
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
  const [Posts, setPosts] = useState([]);

  // fetch rotinas e salva em um array
  useEffect(() => {
    const fetchRotinas = async () => {
      const dataRotinas = await getRotina(userData.id);
      setRotinas(dataRotinas.data);
    };

    fetchRotinas();
  }, []);

  // fetch posts e salva em um array
  useEffect(() => {
    const fetchPosts = async () => {
      const dataPosts = await getPost(userData.id);
      setPosts(dataPosts.data);
    };

    fetchPosts();
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
  const PostsRend = (nome, descr, data, foto) => {
    return (
      <>
        <Card marginBottom={"15px"} maxW="md">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar />
                <Box>
                  <Heading size="sm">
                    @{nome} está firme em seus objetivos!
                  </Heading>
                  <Text>Que maravilha!</Text>
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
            <Text>{descr}</Text>
          </CardBody>
          <Image objectFit="cover" src={foto} alt="Chakra UI" />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          ></CardFooter>
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
          height={"80vh"}
          width={"100vw"}
          position={"sticky"}
          margin={"40px auto"}
          top={"50px"}
        >
          <Text fontSize="30px">
            O benefício futuro é maior que o desconforto de agora!
          </Text>

          <Text fontSize="20px">
            @{userData.nome}, você está indo muito bem! Continue assim!
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

        <Container padding={"10px"}>
          <Text>Veja o quão longe você já foi!</Text>
          {Posts.map((post) => {
            return PostsRend(userData.nome, post.desc, post.data, post.foto);
          })}
        </Container>
      </SimpleGrid>

      <Footer />
    </>
  );
}

export default Feed;
