import { nutritionixApi } from "./const";
import { xappid } from "./const";
import { xappkey } from "./const";
import axios from "axios";

export const getNutrition = async (value) => {
  try {
    const response = await axios.get(`${nutritionixApi}/`, {
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
