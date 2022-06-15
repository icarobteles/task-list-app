import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-list-backend-api.herokuapp.com",
});

export default instance;
