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
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

function Perfil() {
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

  // rotinas renderizadas
  const RotinasRend = (props) => {
    const { nome, duration, date, time } = props;
    return (
      <Box bg={"#EBF5F8"} px={4} py={5} rounded={"lg"} shadow={"lg"}>
        <Text fontSize={"md"}>{nome}</Text>
        <Text fontSize={"sm"}>{duration} horas</Text>
        <Text fontSize={"sm"}>
          {date}, às {time}
        </Text>
      </Box>
    );
  };

  // postagens renderizadas
  const PostsRend = (props) => {
    const { habito, duration, date, time } = props;
    return (
      <Card>
        <CardHeader>
          <Heading size="md">{habito}</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Durante {duration} hora(s) no dia {date}, às {time}
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

      <Container className="perfil-info">
        <Avatar size={"2xl"} />
        <Text fontSize={"xl"}>Nome do Usuário</Text>
        <Text fontSize={"md"}>@username</Text>
        <Text fontSize={"sm"}>
          Descrição do usuário: Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Illo cum porro excepturi recusandae vel omnis
          distinctio optio tempore nemo iusto?
        </Text>
        <Button variant={"btn1"}>Editar Perfil</Button>
      </Container>

      <Container>
        <Box>
          <Text fontSize={"xl"}>Minha Rotina</Text>
          {Rotinas.map((rotina) => (
            <RotinasRend
              key={rotina.id}
              nome={rotina.nome}
              duration={rotina.duration}
              date={rotina.date}
              time={rotina.time}
            />
          ))}
        </Box>
        <Button variant={"btn1"}>Editar Rotina</Button>
      </Container>

      <Container className="perfil-posts-container">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {Posts.map((post) => (
            <PostsRend
              key={post.id}
              habito={post.habito}
              duration={post.duration}
              date={post.date}
              time={post.time}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Footer />
    </>
  );
}

export default Perfil;
