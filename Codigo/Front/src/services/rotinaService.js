import axios from "axios";

// ? esse é um modo eficiente?
// fetch um hábido do user
export const getHabito = async (id) => {
  return [
    {
      id: 1,
      userId: 1,
      nome: "Ler um livro",
      desc: "15 minutos por dia",
      freq: "smp",
      hora: "18:00",
    },
    {
      id: 2,
      userId: 1,
      nome: "Fazer exercícios",
      desc: "manter a saude!!",
      freq: "seg,qua,sex",
      hora: "9:00",
    },
    { id: 3, userId: 1, nome: "Estudar", desc: "", freq: "smp", hora: "14:00" },
  ];
};

// fetch rotina/todos os hábitos do user
export const getRotina = async (userId) => {
  return [
    {
      id: 1,
      userId: 1,
      nome: "Ler um livro",
      desc: "15 minutos por dia",
      freq: "smp",
      hora: "18:00",
    },
    {
      id: 2,
      userId: 1,
      nome: "Fazer exercícios",
      desc: "manter a saude!!",
      freq: "seg,qua,sex",
      hora: "9:00",
    },
    { id: 3, userId: 1, nome: "Estudar", desc: "", freq: "smp", hora: "14:00" },
  ];

  // return await (
  //     await axios.post(
  //         ``;
  //     )
  // ).data;
};
