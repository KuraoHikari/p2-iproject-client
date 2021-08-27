import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://rate-your-anime.herokuapp.com",
});

export default baseUrl;
