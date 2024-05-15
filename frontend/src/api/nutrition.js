import { nutritionixApiAutocomplete, nutritionixApi } from "./const";
import { xappid } from "./const";
import { xappkey } from "./const";
import axios from "axios";

export const getNutritionAutomplete = async (value) => {
  try {
    const response = await axios.get(`${nutritionixApiAutocomplete}/`, {
      headers: {
        "x-app-id": xappid,
        "x-app-key": xappkey,
      },
      params: {
        query: value,
      },
    });

    const mapped = response.data.common.map((item) => item.food_name);
    return mapped;
  } catch (error) {
    console.log(error);
  }
};

export const getNutrition = async (value) => {
  try {
    const response = await axios.post(`${nutritionixApi}/`, value, {
      headers: {
        "x-app-id": xappid,
        "x-app-key": xappkey,
      },
    });

    return response.data.foods[0];
  } catch (error) {
    console.log(error);
  }
};
