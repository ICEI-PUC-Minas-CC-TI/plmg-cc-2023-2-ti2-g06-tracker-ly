// hooks
import { useEffect, useState } from "react";
import { useLogin } from "../hooks/auth";
import { getRotina } from "../services/rotinaService";
import { getPost } from "../services/postService";
import { parseFreq } from "../helpers";
// components
import Footer from "../components/Footer";
import Nav from "../components/Nav";
// chakra
import {
  Avatar,
  Box,
  Button,
  Container,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function Perfil() {
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
      setPosts(dataPosts);
    };

    fetchPosts();
  }, []);

  // rotinas renderizadas
  const RotinasRend = (props) => {
    const { nome, descr, freq, hora } = props;

    return (
      <Box bg={"#EBF5F8"} px={4} py={5} rounded={"lg"} shadow={"lg"}>
        <Text fontSize={"md"}>{nome}</Text>
        <Text fontSize={"sm"}>{descr}</Text>
        <Text fontSize={"sm"}>{parseFreq(freq)}</Text>
        <Text fontSize={"sm"}>{hora}</Text>

      </Box>
    );
  };

  // postagens renderizadas
  const PostsRend = (props) => {
    const { habito_id, desc, data } = props;
    return (
      <Card>
        <CardHeader>
          <Heading size="md">{habito_id}</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            {desc}
          </Text>
          <Text>
            {data}
          </Text>
        </CardBody>
        <CardFooter>
          <Button variant={"btn2"}>Ver mais</Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <>
      <Nav />

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        margin={"60px"}
      >
        <GridItem className="perfil-info-container" rowSpan={2}>
          <Avatar size={"2xl"} />
          <Text fontSize={"3xl"}>{userData.nome}</Text>
          <Text fontSize={"xl"}>@{userData.username}</Text>
          <Text fontSize={"md"}>{userData.desc}</Text>
          <Button variant={"btn1"} marginY={"15px"}>
            Editar Perfil
          </Button>
        </GridItem>

        <GridItem className="perfil-rotinas-container" colSpan={3}>
          <Box>
            <Text fontSize={"xl"}>Minha Rotina</Text>
            {Rotinas.map((rotina) => (
              <RotinasRend
                key={rotina.id}
                nome={rotina.nome}
                descr = {rotina.descr}
                freq={rotina.freq}
                hora={rotina.hora}
                />
            ))}
          </Box>
          <Button variant={"btn1"} marginY={"15px"}>
            Editar Rotina
          </Button>
        </GridItem>

        <GridItem className="perfil-posts-container" colSpan={3}>
          <Text fontSize={"xl"}>Minhas Postagens</Text>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            bgColor={"#EBF5F8"}
            p={"20px"}
          >
            {Posts.map((post) => (
              <PostsRend
                key={post.id}
                habito_id={post.habito_id}
                data={post.data}
              />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>

      <Footer />
    </>
  );
}

export default Perfil;
