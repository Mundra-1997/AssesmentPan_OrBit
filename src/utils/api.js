import axios from "axios";
import { BASE_URL } from "./constants";

export const getUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users.json`);
    console.log(res);
    return res;
  } catch (error) {
    return error;
  }
};
