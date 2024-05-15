import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { updateRecipe } from "../../api/recipes";
import Selection from "./Selection";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

export default function EditRecipe({
  handleOpen,
  handleClose,
  open,
  prop,
  reload,
}) {
  const selectionItems = ["Breakfast", "Lunch", "Dinner", "Extra"];

  const [name, setName] = useState(`${prop.name}`);
  const [time, setTime] = useState(`${prop.time}`);
  const [ingredients, setIngredients] = useState(`${prop.ingredients}`);
  const [stepOne, setStepOne] = useState(`${prop.stepOne}`);
  const [stepTwo, setStepTwo] = useState(`${prop.stepTwo}`);
  const [stepThree, setStepThree] = useState(`${prop.stepThree}`);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const value = {
      name,
      time,
      ingredients,
      stepOne,
      stepTwo,
      stepThree,
      userId: prop.userId,
    };

    if (name && ingredients && stepOne && stepTwo && stepThree) {
      await updateRecipe(prop._id, value);
      console.log(prop._id);
      reload();
      handleClose();
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };

  return (
    <div>
      <IconButton color="primary" aria-label="settings" onClick={handleOpen}>
        <MoreVertIcon fontSize="large" />
      </IconButton>
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
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Selection
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
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
                    value={ingredients}
                    onChange={(e) => {
                      setIngredients(e.target.value);
                    }}
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
                    value={stepOne}
                    onChange={(e) => {
                      setStepOne(e.target.value);
                    }}
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
                    value={stepTwo}
                    onChange={(e) => {
                      setStepTwo(e.target.value);
                    }}
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
                    value={stepThree}
                    onChange={(e) => {
                      setStepThree(e.target.value);
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    UPDATE
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
