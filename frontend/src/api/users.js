import { API } from "./const";
import axios from "axios";
// GET API/users
export const loginUser = async (value) => {
  try {
    const response = await axios.post(`${API}/user/login`, value);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const registerUser = async (value) => {
  try {
    const response = await axios.post(`${API}/user/register`, value);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
