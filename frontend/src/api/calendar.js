import { API } from "./const";
import axios from "axios";
// GET API/users
export const getHighlitedDays = async (value) => {
  try {
    const response = await axios.post(`${API}/calendar`, value);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
