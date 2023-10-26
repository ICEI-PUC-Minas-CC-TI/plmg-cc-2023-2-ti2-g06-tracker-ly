import axios from "axios";

// faltou o list user

export const login = async (data) => {
  return {
    id: 1,
    nome: "João da Silva",
    username: "joaodasilva",
    descr: "Tentando aumentar minha disciplina e melhorar a minha qualidade de vida!! :)",
    email: "joaodasilva@gmail.com",
    senha: "senha123",
    nivel: 1,
    nasc: new Date("12/12/1999"),
  };

  // return await (
  //   await axios.post(
  //     `http://localhost:4567/login?user=${data.email}&senha=${data.senha}`
  //   )
  // ).data;
};

export const cadastro = async (data) => {
  // const strData =
  //   "http://localhost:6789/login?email=" +
  //   data.email +
  //   "&password=" +
  //   data.password +
  //   "&nome=" +
  //   data.nome +
  //   "&nasc=" +
  //   data.data;
  // return true;

  return await axios.post(
    `http://localhost:4567/cadastro?user=${data.email}&senha=${data.password}&nome=${data.name}&email=${data.email}&nasc=${data.date}`
  ).data;
};

export const getUser = async (userId) => {
  //   return await (
  //     await axios.get(``)
  //   ).data;
};

export const seguirUser = async (followerUserId, followedUserId) => {
  // return await (
  //   await axios.post(``)
  // ).data;
};

export const seguidor = async (followerUserId, followedUserId) => {
  // return await (
  //   await axios.get(``)
  // ).data;
};
