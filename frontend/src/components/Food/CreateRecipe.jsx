import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { createRecipe } from "../../api/recipes";
import Selection from "./Selection";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "45%", xl: "30%" },
  height: { xs: "95%", md: "90%", xl: "90%" },
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "1%",
  boxShadow: 24,
};

const styleText = {
  width: "100%",
  "& .MuiInputBase-root": {
    height: { xs: "80px", md: "120px", xl: "120px" },
  },
};

export default function CreateRecipe({
  handleOpen,
  handleClose,
  open,
  prop,
  reload,
}) {
  const [time, setTime] = useState("Extra");
  const selectionItems = ["Breakfast", "Lunch", "Dinner", "Extra"];

  const handleSelectChange = async (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const ingredients = data.get("ingredients");
    const stepOne = data.get("stepOne");
    const stepTwo = data.get("stepTwo");
    const stepThree = data.get("stepThree");

    const value = {
      name,
      time: time,
      ingredients,
      stepOne,
      stepTwo,
      stepThree,
      userId: prop,
    };

    if (name && ingredients && stepOne && stepTwo && stepThree) {
      await createRecipe(value);
      reload();
      handleClose();
    } else {
      alert("Form is invalid! Please check the fields...");
    }
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
                  paddingY: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    fullWidth
                    name="name"
                    id="name"
                    label="Recipe Name"
                  />
                  <Selection
                    value={time}
                    onChange={handleSelectChange}
                    selectionItems={selectionItems}
                  />

                  <TextField
                    sx={styleText}
                    margin="normal"
                    variant="filled"
                    multiline
                    maxRows={4}
                    required
                    name="ingredients"
                    label="Ingredients"
                    id="ingredients"
                  />
                  <TextField
                    sx={styleText}
                    required
                    multiline
                    maxRows={4}
                    variant="filled"
                    name="stepOne"
                    label="Step one"
                    id="stepOne"
                  />
                  <TextField
                    sx={styleText}
                    margin="normal"
                    required
                    multiline
                    maxRows={4}
                    variant="filled"
                    name="stepTwo"
                    label="Step two"
                    id="stepTwo"
                  />
                  <TextField
                    sx={styleText}
                    margin="normal"
                    required
                    multiline
                    maxRows={4}
                    variant="filled"
                    name="stepThree"
                    label="Step three"
                    id="stepThree"
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
