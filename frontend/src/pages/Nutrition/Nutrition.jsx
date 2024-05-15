import { Box } from "@mui/material";
import NutritionComp from "../../components/Nutrition/NutritionComp";

const Nutrition = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box sx={{ width: { xs: "100%", lg: "100%" } }}>
          <NutritionComp />
        </Box>
      </Box>
    </>
  );
};

export default Nutrition;
