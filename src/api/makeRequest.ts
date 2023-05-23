import axios from "axios";
import { baseApiUrl } from "../config";

export const makeRequest = axios.create({
  baseURL: baseApiUrl,
});
