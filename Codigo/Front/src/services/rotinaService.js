import axios from "axios";

// fetch rotina/todos os hábitos do user
export const getRotina = async (userId) => {
  return await axios.get(
    `http://localhost:4567/habitoslistar?user_id=${userId}`
  );
};

// editar rotina/hábitos
export const editRotina = async (data) => {
  return await axios.put(
    `http://localhost:4567/habitoseditar?id=${data.id}&nome=${data.nome}&descr=${data.teste}&freq=${data.freq}&hora=${data.hora}&perfil_id=${data.perfil_id}&user_id=${data.user_id}`
  );
};
