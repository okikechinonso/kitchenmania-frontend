import axios from "axios";
const instance = axios.create({
  // baseURL: "https://kitchenmania-api.com/api/v1",
  baseURL: "http://localhost:8080/api/v1",
});


if (localStorage.token) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.token;
}
export default instance;