import axios from "axios";

// fetch rotina/todos os hábitos do user
export const getRotina = async (userId) => {
  return await axios.get(
    `http://localhost:4567/habitoslistar?user_id=${userId}`
  );
};

// editar rotina/hábitos
export const editRotina = async (id, nome, descr, freq, hora, user_id) => {
  return await axios.put(
    `http://localhost:4567/habitoseditar?id=${id}&nome=${nome}&descr=${descr}&freq=${freq}&hora=${hora}&user_id=${user_id}`
  );
};

// criar hábito
export const criarHabito = async (nome, descr, freq, hora, {id}) => {
  console.log(nome, descr, freq, hora, id);

  return await axios.post(
    `http://localhost:4567/habitoscadastro?nome=${nome}&descr=${descr}&freq=${freq}&hora=${hora}&user_id=${id}`
  );
};
