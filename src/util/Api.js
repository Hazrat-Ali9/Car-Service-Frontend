import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:4000/api/"
    baseURL: 'https://service-center-backend.vercel.app/api/'
})
export default api