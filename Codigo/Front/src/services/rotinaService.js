import axios from "axios";

// fetch rotina/todos os hábitos do user
export const getRotina = async (userId) => {
  return await axios.get(
    `http://localhost:4567/habitoslistar?user_id=${userId}`
  );
};
