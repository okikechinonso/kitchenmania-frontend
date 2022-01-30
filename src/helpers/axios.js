import axios from "axios";
let instance = null
if (process.env.NODE_ENV !== "development"){
  instance = axios.create({ 
    baseURL: process.env.REACT_APP_AXIOS_URL,
  });
}else{
  instance = axios.create({ 
    baseURL: "http://localhost:8080/api/v1",
  });
}

if (localStorage.token) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.token;
}
export default instance;