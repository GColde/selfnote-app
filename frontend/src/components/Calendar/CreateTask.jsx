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
import PropTypes from "prop-types";
import { createTask } from "../../api/calendar";

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

export default function CreateTask({
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

    const task = data.get("exercise");
    const weight = data.get("weight");

    if (task && weight) {
      const value = {
        task,
        weight,
        year,
        day,
        month,
        userId,
      };

      await createTask(value);

      reload();
      handleClose();
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        New Exercise
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
                    id="exercise"
                    label="Exercise name"
                    name="exercise"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="weight"
                    label="Weight"
                    type="text"
                    id="weight"
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

CreateTask.propTypes = {
  userId: PropTypes.string.isRequired,
  props: PropTypes.instanceOf(Date).isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  reload: PropTypes.func.isRequired,
  getFullYear: PropTypes.func,
  getDate: PropTypes.func,
};
