import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function RecipeComp({ props }) {
  return (
    <Card
      sx={{
        minWidth: { xs: "100%", lg: "48%" },
        maxWidth: { xs: "100%", lg: "48%" },
        height: { xs: 800, lg: 750, xl: 650 },
      }}
    >
      <CardHeader
        sx={{ mt: 2 }}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        color="text.primary"
        title={props.name}
      />

      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          <Typography
            component="span"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
            variant="h6"
          >
            Time:{" "}
          </Typography>
          {props.time}
        </Typography>
        <Typography sx={{ fontSize: 20, my: 4 }} color="text.primary">
          <Typography
            component="span"
            color="text.secondary"
            sx={{ fontWeight: 700 }}
            variant="h5"
          >
            Ingredients:
            <br />
          </Typography>
          {props.ingredients}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.primary">
          <Typography
            component="span"
            color="text.secondary"
            sx={{ fontWeight: 700 }}
            variant="h5"
          >
            Step one:
            <br />
          </Typography>
          {props.stepOne}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.primary">
          <Typography
            component="span"
            color="text.secondary"
            sx={{ fontWeight: 700 }}
            variant="h5"
          >
            Step two:
            <br />
          </Typography>
          {props.stepTwo}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.primary">
          <Typography
            component="span"
            color="text.secondary"
            sx={{ fontWeight: 700 }}
            variant="h5"
          >
            Step three:
            <br />
          </Typography>
          {props.stepThree}
        </Typography>
      </CardContent>
    </Card>
  );
}
