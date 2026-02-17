import axios from "axios";

const BASE_URL = "http://localhost:3100";

const app = axios.create({
  baseURL: BASE_URL,
  //withCredentials: true   need to be true when admin dashboard coding begin!
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default http;
