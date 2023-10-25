import axios from 'axios';

export const postar = async (data) => {
    return await (
        await axios.post(``, data)
    ).data;
};

export const getPostagens = async (userId) => {
    return await (
        away axios.get(``)
    ).data;
}

// não precisa de like de postagem
// o que é getUserFeed?
