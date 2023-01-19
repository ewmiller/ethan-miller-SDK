import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const authHeader = `Bearer ${process.env.LOTR_API_TOKEN}`;

const api = axios.create({
  baseURL: "https://the-one-api.dev/v2/movie",
  timeout: 5000,
  headers: { Authorization: authHeader },
});

export default api;
