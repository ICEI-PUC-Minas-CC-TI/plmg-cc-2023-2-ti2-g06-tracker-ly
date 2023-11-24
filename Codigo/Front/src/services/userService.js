import axios from "axios";

export const login = async (email, password) => {
  return await (
    await axios.post(
      `http://localhost:4567/Presentation/login?email=${email}&senha=${password}`
    )
  ).data;
};

export const cadastro = async (user, senha, nome, email, nasc) => {
  // return await axios.post(
  //   `http://localhost:4567/Presentation/cadastro?user=${data.email}&senha=${data.password}&nome=${data.name}&email=${data.email}&nasc=${data.date}`
  // ).data;

  console.log(user, senha, nome, email, nasc);

  return await axios.post(
    `http://localhost:4567/Presentation/cadastro?user=${user}&senha=${senha}&nome=${nome}&email=${email}&nasc=${nasc}`
  ).data;
};