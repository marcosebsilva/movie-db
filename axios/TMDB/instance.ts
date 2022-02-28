import axios, { AxiosInstance } from "axios";

const themoviedb: AxiosInstance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  timeout: 2000,
})

export default themoviedb;