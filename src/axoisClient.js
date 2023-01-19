import axios from "axios";

const axoisClient = axios.create({
    baseURL: import.meta.env.VITE_BASIC_API_URL,
});

export default axoisClient;