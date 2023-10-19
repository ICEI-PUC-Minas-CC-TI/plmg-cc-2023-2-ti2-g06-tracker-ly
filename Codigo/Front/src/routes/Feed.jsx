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
  //   BiLike,
  //   BiChat,
  //   BiShare,
  //   BsThreeDotsVertical,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";

function Feed() {
  // rotinas mock
  const Rotinas = [
    {
      id: 1,
      nome: "Ler um livro",
      duration: 0.25,
      date: "Todo dia",
      time: "18:00",
    },
    {
      id: 2,
      nome: "Fazer exercícios",
      duration: 1,
      date: "Três vezes na semana",
      time: "9:00",
    },
    { id: 3, nome: "Estudar", duration: 2, date: "Todo dia", time: "14:00" },
  ];

  // postagens mock
  const Posts = [
    {
      id: 1,
      habito: "Ler um livro",
      duration: 0.25,
      date: "19/10/2023",
      time: "18:00",
    },
    {
      id: 2,
      habito: "Fazer exercícios",
      duration: 1,
      date: "19/10/2023",
      time: "9:00",
    },
  ];

  // amigos mock
  const Amigos = [{ id: 1, nome: "Mariana F. Costa",  }];

  return (
    <>
      <Nav />
      <Text>Veja as publicações mais recentes de seus amigos: </Text>

      <Container>
        <Card maxW="md">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />

                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                //   icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
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
      </Container>

      <Footer />
    </>
  );
}

export default Feed;
