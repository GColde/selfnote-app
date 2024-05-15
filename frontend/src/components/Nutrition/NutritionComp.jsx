import { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDebounce } from "./useDebounce";
import { getNutritionAutomplete, getNutrition } from "../../api/nutrition";
import Typography from "@mui/material/Typography";
import NutritionCard from "./NutritionCard";

const NutritionComp = () => {
  const [value, setValue] = useState(undefined);
  const [params, setParams] = useState([]);
  const [nutrition, setNutrition] = useState();

  const debouncedValue = useDebounce(value, 700);

  const search = useCallback(async () => {
    const result = await getNutritionAutomplete(value);
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
            onChange={async (e, value) => {
              const result = await getNutrition({ query: value });
              setNutrition(result);
            }}
            sx={{ width: 500 }}
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
        >
          {nutrition != null ? (
            <NutritionCard prop={nutrition} />
          ) : (
            <Typography variant="h5">Waiting for ingredient...</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NutritionComp;
