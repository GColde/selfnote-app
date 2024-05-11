import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { createTaskV2 } from "../../api/calendar";

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

export default function CreatingTask({
  userId,
  props,
  handleOpen,
  handleClose,
  open,
  reload,
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const year = props.getFullYear();
    const month = props.toLocaleString("default", {
      month: "short",
    });
    const day = props.getDate();

    const value = {
      task: data.get("exercise"),
      weight: data.get("weight"),
      year,
      day,
      month,
      userId,
    };

    await createTaskV2(value);

    reload();
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
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
                    id="exercise"
                    label="Exercise name"
                    name="exercise"
                    autoFocus
                    value="Dumbells"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="weight"
                    label="Weight"
                    type="text"
                    id="weight"
                    value="95"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
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
