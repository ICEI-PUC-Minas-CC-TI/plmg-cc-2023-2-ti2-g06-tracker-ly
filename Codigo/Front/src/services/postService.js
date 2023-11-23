import axios from "axios";

export const getPost = async (user_id) => {
  // return [
  //   {
  //     id: 1,
  //     perfil_id: 1,
  //     habito_id: 1,
  //     descr: "Primeiro dia usando o Tracker.ly! Muito animado pra começar essa jornada",
  //     data: "19/10/2023",
  //   },
  //   {
  //     id: 2,
  //     perfil_id: 1,
  //     habito_id: 2,
  //     descr: "Hoje ta pago",
  //     data: "19/10/2023",
  //   },
  //   {
  //     id: 3,
  //     perfil_id: 1,
  //     habito_id: 3,
  //     descr: "",
  //     data: "20/10/2023",
  //   },
  // ];

  return await axios.get(
    `http://localhost:4567/postusuario?user_id=${user_id}`
  );
};

// não precisa de like de postagem
// o que é getUserFeed?
