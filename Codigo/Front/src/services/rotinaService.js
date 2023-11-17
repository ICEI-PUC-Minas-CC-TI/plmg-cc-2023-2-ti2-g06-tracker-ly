import axios from "axios";

// ? esse é um modo eficiente?
// fetch um hábido do user
export const getHabito = async (id) => {
  return [
    {
      id: 1,
      perfil_id: 32,
      nome: "Ler um livro",
      descr: "15 minutos por dia",
      freq: "smp",
      hora: "18:00",
    },
    {
      id: 2,
      perfil_id: 32,
      nome: "Fazer exercícios",
      descr: "manter a saude!!",
      freq: "seg,qua,sex",
      hora: "9:00",
    },
    {
      id: 3,
      perfil_id: 32,
      nome: "Estudar",
      descr: "",
      freq: "smp",
      hora: "14:00",
    },
  ];

  // return await axios.post(
  //   ``
  // ).data;
};

// fetch rotina/todos os hábitos do user
export const getRotina = async (userId) => {
  return [
    {
      id: 1,
      perfil_id: 32,
      nome: "Ler um livro",
      desc: "15 minutos por dia",
      freq: "smp",
      hora: "18:00",
    },
    {
      id: 2,
      perfil_id: 32,
      nome: "Fazer exercícios",
      desc: "manter a saude!!",
      freq: "seg,qua,sex",
      hora: "9:00",
    },
    { id: 3, perfil_id: 32, nome: "Estudar", desc: "", freq: "smp", hora: "14:00" },
  ];

  // return await axios.post(
  //   `http://localhost:4567/habitoslistar?perfil_id=${userId}`
  // );
};
