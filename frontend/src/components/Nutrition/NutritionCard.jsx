import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const style = {
  display: "inline-block",
  fontWeight: 500,
  fontSize: "15px",
  ml: "5px",
};
const styleText = {
  display: "inline-block",
  fontWeight: 500,
  fontSize: "18px",
  ml: "10px",
};

export default function NutritionCard({ prop }) {
  const ref = `https://www.nutritionix.com/food/${prop.food_name}`;
  return (
    <Card sx={{ minWidth: { xs: "100%", md: 400 } }}>
      <CardContent>
        <CardMedia
          component="img"
          height="180"
          image={prop.photo.highres}
          alt={prop.food_name}
          sx={{ width: "100%", objectFit: "contain" }}
        />
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="h4" component="div">
          {prop.food_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Serving size : {prop.serving_weight_grams}{" "}
          <Box component="span" sx={style}>
            g.
          </Box>
        </Typography>
        <Typography
          sx={{ mb: 1, fontWeight: 900 }}
          variant="h6"
          color="text.primary"
        >
          Calories:
          <Box component="span" sx={styleText}>
            {prop.nf_calories ?? "0"}
          </Box>
          <Box component="span" sx={style}>
            kcal.
          </Box>
        </Typography>
        <Typography
          sx={{ mb: 1, fontWeight: 900 }}
          variant="h6"
          color="text.primary"
        >
          Protein:
          <Box component="span" sx={styleText}>
            {prop.nf_protein ?? "0"}
          </Box>
          <Box component="span" sx={style}>
            g.
          </Box>
        </Typography>
        <Typography
          sx={{ mb: 1, fontWeight: 900 }}
          variant="h6"
          color="text.primary"
        >
          Sugar:
          <Box component="span" sx={styleText}>
            {prop.nf_sugars ?? "0"}
          </Box>
          <Box component="span" sx={style}>
            g.
          </Box>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" target="_blank" sx={{ mb: 2 }} href={ref}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
