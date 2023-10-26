import axios from "axios";

export const postar = async (data) => {
  // return await (
  //     await axios.post(``, data)
  // ).data;
};

export const getPost = async (perfil_id) => {
  return [
    {
      id: 1,
      perfil_id: 1,
      habito_id: 1,
      desc: "Primeiro dia usando o Tracker.ly! Muito animado pra começar essa jornada",
      data: "19/10/2023",
    },
    {
      id: 2,
      perfil_id: 1,
      habito_id: 2,
      desc: "Hoje ta pago",
      data: "19/10/2023",
    },
    {
      id: 3,
      perfil_id: 1,
      habito_id: 3,
      desc: "",
      data: "20/10/2023",
    },
  ];

  // return await (
  //     away axios.get(``)
  // ).data;
};

// não precisa de like de postagem
// o que é getUserFeed?
