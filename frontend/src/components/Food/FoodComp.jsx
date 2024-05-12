import { useState, useEffect } from "react";
import CreatingRecipe from "./CreatingRecipe";
import RecipeComp from "./RecipeComp";
import Typography from "@mui/material/Typography";
import Selection from "./Selection";
import { Box } from "@mui/material";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { getRecipes } from "../../api/recipes";

const FoodComp = () => {
  const [recipes, setRecipes] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = useAuthUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sendValueV2 = {
          userId: userId,
        };
        const resultV2 = await getRecipes(sendValueV2);
        setRecipes(resultV2);
        console.log(resultV2);
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
            justifyContent: "space-between",
          }}
        >
          <Selection />
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
            // justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {recipes ? (
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
