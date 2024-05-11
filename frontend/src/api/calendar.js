import { API } from "./const";
import axios from "axios";

export const getHighlitedDaysV2 = async (value) => {
  try {
    const response = await axios.post(`${API}/calendar/V2`, value);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDayTasksV2 = async (value) => {
  try {
    const response = await axios.post(`${API}/calendar/V2/day`, value);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTaskV2 = async (value) => {
  try {
    const response = await axios.delete(`${API}/calendar/V2/${value}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createTaskV2 = async (value) => {
  try {
    const response = await axios.post(`${API}/calendar/V2/newTask`, value);
    return response;
  } catch (error) {
    console.log(error);
  }
};
