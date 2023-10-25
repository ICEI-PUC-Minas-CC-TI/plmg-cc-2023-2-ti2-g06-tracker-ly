import axios from "axios";

// faltou o list user

export const login = async (data) => {
  return ({
    id: 1,
    nome: "João da Silva",
    email: "joaodasilva@gmail.com",
    password: "senha123",
    nivel: 1,
    nasc: new Date("12/12/1999"),
  });

  // return await (
  //     await axios.post(
  //         ``;
  //     )
  // ).data;
};

export const cadastro = async (data) => {
  const strData =
    "http://localhost:6789/login?email=" +
    data.email +
    "&password=" +
    data.password +
    "&nome=" +
    data.nome +
    "&nasc=" +
    data.nasc;

  return true;

  // return await (
  //     await axios.post(
  //         ``;
  //     )
  // ).data;
};

export const getUser = async (userId) => {
  return await (
    await axios.get(``)
  ).data;
};

export const seguirUser = async (followerUserId, followedUserId) => {
  return await (
    await axios.post(``)
  ).data;
};

export const seguidor = async (followerUserId, followedUserId) => {
  return await (
    await axios.get(``)
  ).data;
};
