import axios from "axios";

// fetch rotina/todos os hábitos do user
export const getRotina = async (userId) => {
  return await axios.get(
    `http://localhost:4567/habitoslistar?user_id=${userId}`
  );
};

// editar rotina/hábitos
export const editRotina = async (id, nome, descr, freq, hora, perfil_id, user_id) => {
  return await axios.put(
    `http://localhost:4567/habitoseditar?id=${id}&nome=${nome}&descr=${descr}&freq=${freq}&hora=${hora}&perfil_id=${user_id}`
  );
};
