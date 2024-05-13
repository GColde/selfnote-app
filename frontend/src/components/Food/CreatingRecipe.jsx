import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createRecipe } from "../../api/recipes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function CreatingRecipe({
  handleOpen,
  handleClose,
  open,
  prop,
  reload,
}) {
  const [time, setTime] = useState("Extra");

  const handleSelectChange = async (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const value = {
      name: data.get("name"),
      time: time,
      ingredients: data.get("ingredients"),
      stepOne: data.get("stepOne"),
      stepTwo: data.get("stepTwo"),
      stepThree: data.get("stepThree"),
      userId: prop,
    };

    console.log(value);

    await createRecipe(value);

    reload();
  };

  return (
    <div>
      <Button variant="contained" sx={{ height: 55 }} onClick={handleOpen}>
        New Recipe
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <FitnessCenterIcon />
                </Avatar>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Recipe Name"
                    name="name"
                    autoFocus
                    value="Saltibarsciai"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="ingredients"
                    label="Ingredients"
                    type="text"
                    id="ingredients"
                    value="makaronai, kefyras"
                  />
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="demo-simple-select-label">Time</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={time}
                      label="Time"
                      onChange={handleSelectChange}
                    >
                      <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
                      <MenuItem value={"Lunch"}>Lunch</MenuItem>
                      <MenuItem value={"Dinner"}>Dinner</MenuItem>
                      <MenuItem value={"Extra"}>Extra</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="stepOne"
                    label="Step one"
                    type="text"
                    id="stepOne"
                    value="bla bla bla"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="stepTwo"
                    label="Step two"
                    type="text"
                    id="stepTwo"
                    value="bla bla bla"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="stepThree"
                    label="Step three"
                    type="text"
                    id="stepThree"
                    value="bla bla bla"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    ADD
                  </Button>
                  <Grid container>
                    <Grid item></Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
