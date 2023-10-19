// components
import Footer from "../components/Footer";
import Nav from "../components/Nav";
// chakra
import { Avatar, Box, Container, Text } from "@chakra-ui/react";

function Perfil() {
  // rotinas
  const Rotinas = [
    { nome: "Ler um livro", duration: 0.25, date: "Todo dia", time: "18:00" },
    {
      nome: "Fazer exercícios",
      duration: 1,
      date: "Três vezes na semana",
      time: "9:00",
    },
    { nome: "Estudar", duration: 2, date: "Todo dia", time: "14:00" },
  ];

  // rotinas renderizadas
  const RotinasRend = (props) => {
    const { nome, duration, date, time } = props;
    return (
      <Box bg={"#EBF5F8"} px={4} py={5} rounded={"lg"} shadow={"lg"}>
        <Text fontSize={"md"}>{nome}</Text>
        <Text fontSize={"sm"}>{duration} horas</Text>
        <Text fontSize={"sm"}>{date}, às {time}</Text>
      </Box>
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
      </Container>

      <Container>
        <Box>
          <Text fontSize={"xl"}>Minha Rotina</Text>
          {Rotinas.map((rotina) => (
            <RotinasRend key={rotina.nome} nome={rotina.nome} duration={rotina.duration} date={rotina.date} time={rotina.time} />
          ))}
        </Box>
      </Container>

      <Footer />
    </>
  );
}

export default Perfil;
