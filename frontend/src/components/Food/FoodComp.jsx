import { useState, useEffect } from "react";
import CreatingRecipe from "./CreatingRecipe";
import RecipeComp from "./RecipeComp";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { getRecipes, getRecipesTime } from "../../api/recipes";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FoodComp = () => {
  const [recipes, setRecipes] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = useAuthUser();

  const [time, setTime] = useState("");
  const handleSelectChange = async (e) => {
    setTime(e.target.value);
    const value = {
      userId: userId,
      time: e.target.value,
    };
    console.log(value);
    const result = await getRecipesTime(value);
    setRecipes(result);
    console.log(result);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = {
          userId: userId,
        };
        const result = await getRecipes(value);
        setRecipes(result);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ width: { xs: "60%", lg: "40%" } }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                label="Time"
                onChange={handleSelectChange}
              >
                <MenuItem value={"Any"}>Any</MenuItem>
                <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
                <MenuItem value={"Lunch"}>Lunch</MenuItem>
                <MenuItem value={"Dinner"}>Dinner</MenuItem>
                <MenuItem value={"Extra"}>Extra</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <CreatingRecipe
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
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
          {recipes.length > 0 ? (
            recipes.map((item) => <RecipeComp key={item._id} props={item} />)
          ) : (
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">
                You still dont have recipes in here!
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FoodComp;
