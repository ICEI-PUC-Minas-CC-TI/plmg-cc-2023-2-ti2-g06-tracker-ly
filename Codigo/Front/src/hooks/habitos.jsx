// hooks
import React, { useState, useEffect } from "react";
import { getRotina } from "../services/rotinaService";
import { useLogin } from "./auth";

export const HabitosContext = React.createContext({});

export const HabitosProvider = ({ children }) => {
    const [rotina, setRotina] = useState([]);
    const { userData } = useLogin();
    // const [id, setId] = useState(userData.id);


    // // fetch rotinas e salva em um array
    // useEffect(() => {
    //     const fetchRotinas = async (idUserLogado) => {
    //       const dataRotinas = await getRotina(idUserLogado);
    //       setRotina(dataRotinas);
    //     };
    
    //     if (id) {
    //         fetchRotinas(id);
    //         console.log("Rotinas adquiridas com sucesso", id);
    //     } else {
    //         console.log("Não foi possível adquirir as rotinas");
    //     }
    //   }, []);

    return (
        <HabitosContext.Provider
            value={{
                rotina,
                
            }}
        >
            {children}
        </HabitosContext.Provider>
    );
};

export const useHabitos = () => React.useContext(HabitosContext);