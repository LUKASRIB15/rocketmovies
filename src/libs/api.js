import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-a59v.onrender.com",
})