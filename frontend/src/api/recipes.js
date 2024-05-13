import { API } from "./const";
import axios from "axios";

export const getRecipes = async (value) => {
  try {
    const response = await axios.post(`${API}/recipes`, value);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getRecipesTime = async (value) => {
  try {
    const response = await axios.post(`${API}/recipes/time`, value);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const getDayTasks = async (value) => {
//   try {
//     const response = await axios.post(`${API}/calendar/V2/day`, value);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteTask = async (value) => {
//   try {
//     const response = await axios.delete(`${API}/calendar/V2/${value}`);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createTask = async (value) => {
//   try {
//     const response = await axios.post(`${API}/calendar/V2/newTask`, value);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
