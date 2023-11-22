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

  // fetch rotinas e salva em um array
  useEffect(() => {
    const fetchRotinas = async () => {
      const dataRotinas = await getRotina(userData.id);
      setRotinas(dataRotinas.data);
    };

    fetchRotinas();
  }, []);

  console.log("Rotinas:", Rotinas);

  const RotinasRend = (props) => {
    const { nome, descr, freq, hora } = props;

    return (
      <>
        <Box bg={"#EBF5F8"} px={4} py={5} rounded={"lg"} shadow={"lg"}>
          <Text fontSize={"md"}>{nome}</Text>
          <Text fontSize={"sm"}>{descr}</Text>
          <Text fontSize={"sm"}>{parseFreq(freq)}</Text>
          <Text fontSize={"sm"}>{hora}</Text>
        </Box>
      </>
    );
  };

  const PostsRend = (props) => {
    return (
      <Card marginBottom={"15px"} maxW="md">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
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
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </CardBody>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
          <Button flex="1" variant="ghost">
            Like
          </Button>
          <Button flex="1" variant="ghost">
            Comment
          </Button>
          <Button flex="1" variant="ghost">
            Share
          </Button>
        </CardFooter>
      </Card>
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
          top={"20px"}
          marginTop={"20px"}
        >
          <Text fontSize="3xl">
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

        <Container backgroundColor={"red"} padding={"10px"}>
          {PostsRend()};
        </Container>
      </SimpleGrid>

      <Footer />
    </>
  );
}

export default Feed;
