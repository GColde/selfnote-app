import { API } from "./const";
import axios from "axios";

// export const getRecipes = async (value) => {
//   try {
//     const response = await axios.post(`${API}/recipes`, value);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getRecipesTime = async (value) => {
  try {
    const response = await axios.post(`${API}/recipes`, value);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (value) => {
  try {
    const response = await axios.delete(`${API}/recipes/${value}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe = async (value) => {
  try {
    const response = await axios.post(`${API}/recipes/newRecipe`, value);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateRecipe = async (id, value) => {
  try {
    const response = await axios.put(`${API}/recipes/change/${id}`, value);
    return response;
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

// export const createTask = async (value) => {
//   try {
//     const response = await axios.post(`${API}/calendar/V2/newTask`, value);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
