import { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDebounce } from "./useDebounce";
import { getNutrition } from "../../api/nutrition";

const NutritionComp = () => {
  const [value, setValue] = useState(undefined);
  const [params, setParams] = useState([]);
  const [ingredient, setIngredient] = useState();

  const debouncedValue = useDebounce(value, 700);

  const search = useCallback(async () => {
    const result = await getNutrition(value);
    setParams(result);
  }, [debouncedValue]);

  useEffect(() => {
    if (!value) {
      return;
    } else {
      search();
    }
  }, [debouncedValue, search]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: { xs: "100%", lg: "80%" }, mt: 4 }}>
        <Box
          sx={{
            my: 4,
            display: "flex",
            justifyContent: "Center",
          }}
        >
          <Autocomplete
            autoHighlight
            disablePortal
            id="combo-box-demo"
            options={params}
            value={value}
            onInputChange={(e) => {
              setValue(e.target.value);
            }}
            onChange={(e, value) => {
              setIngredient(value);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Food" />}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        ></Box>
      </Box>
      {ingredient}
    </Box>
  );
};

export default NutritionComp;
