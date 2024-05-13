import { useState, useEffect } from "react";
import CreatingRecipe from "./CreatingRecipe";
import RecipeComp from "./RecipeComp";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { getRecipesTime } from "../../api/recipes";
import Selection from "./Selection";

const FoodComp = () => {
  const [recipes, setRecipes] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = useAuthUser();

  const [time, setTime] = useState("Any");

  const menuItems = ["Any", "Breakfast", "Lunch", "Dinner", "Extra"];

  const onReload = async () => {
    try {
      const value = {
        userId: userId,
        time: time,
      };
      const result = await getRecipesTime(value);
      setRecipes(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectChange = async (e) => {
    setTime(e.target.value);
    const value = {
      userId: userId,
      time: e.target.value,
    };
    const result = await getRecipesTime(value);
    setRecipes(result);
  };

  useEffect(() => {
    onReload();
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
            <Selection
              value={time}
              onChange={handleSelectChange}
              menuItems={menuItems}
            />
          </Box>
          <CreatingRecipe
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            prop={userId}
            reload={() => {
              onReload();
            }}
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
            recipes.map((item) => (
              <RecipeComp
                key={item._id}
                props={item}
                reload={() => {
                  onReload();
                }}
              />
            ))
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
