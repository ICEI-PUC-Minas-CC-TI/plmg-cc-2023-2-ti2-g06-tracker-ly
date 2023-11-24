import axios from "axios";

// pega todos os posts do user
export const getPost = async (user_id) => {
  return await axios.get(
    `http://localhost:4567/postusuario?user_id=${user_id}`
  );
};

// criar post
export const postar = async (user_id, descr, foto, habito_id) => {
  return await axios.post(
    `http://localhost:4567/postcadastro?descricao=${descr}&foto=${foto}&habito_id=${habito_id}&user_id=${user_id}`
  );
};

// deletar post
export const deletePost = async (id) => {
  return await axios.delete(`http://localhost:4567/postdelete?id=${id}`);
}