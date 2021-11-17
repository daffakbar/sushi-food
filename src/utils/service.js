import axios from "axios";

const service = axios.create({
  baseURL: "https://sushi-food.herokuapp.com",
});

export default service;
