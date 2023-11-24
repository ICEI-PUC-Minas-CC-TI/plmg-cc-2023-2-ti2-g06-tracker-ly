import axios from "axios";

export const getChatGpt = async (userInput) => {
    return await axios.post(
      `https://api.openai.com/v1/chat/completions`,{model: "gpt-3.5-turbo", messages: [
        { role: "system", content: "Você é um bot" },
        { role: "user", content: userInput },
      ]},{headers: {"Content-Type": "application/json", 'Authorization': "Bearer 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"}}
    );
};