import { LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Badge, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DayEntryElement from "./DayEntryElement";
import useCalendarComp from "./useCalendarComp";
import CreatingTask from "./CreatingTask";

const CalendarComp = () => {
  const {
    onReload,
    onChange,
    onMonthChange,
    highlightedDays,
    exercises,
    value,
    open,
    handleOpen,
    handleClose,
    userId,
  } = useCalendarComp();

  return (
    <Box
      display="flex"
      sx={{
        flexDirection: { xs: "column" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        <Box
          width="100%"
          sx={{
            mt: 4,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
              sx={{ width: { xs: "100%", lg: "30%" } }}
              variant="static"
              orientation="portrait"
              value={value}
              disableFuture
              onChange={onChange}
              onMonthChange={onMonthChange}
              onYearChange={onMonthChange}
              slots={{
                day: (props) => {
                  const isSelected =
                    !props.outsideCurrentMonth &&
                    highlightedDays.indexOf(props.day.getDate()) >= 0;

                  return (
                    <Badge
                      key={props.day.toString()}
                      overlap="circular"
                      badgeContent={
                        isSelected ? <CheckIcon htmlColor="red" /> : undefined
                      }
                    >
                      <PickersDay {...props} />
                    </Badge>
                  );
                },
              }}
            />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="right"
              aligncontent="center"
            ></Box>
          </LocalizationProvider>
        </Box>
      }

      <Box
        display="flex"
        justifyContent="center"
        aligncontent="center"
        sx={{ width: { xs: "100%", lg: "50%" } }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  mt: 4,
                  mb: 2,
                }}
              >
                <Typography variant="h6" component="div">
                  Day exercises:
                </Typography>
                <CreatingTask
                  userId={userId}
                  props={value}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  open={open}
                  reload={() => {
                    onReload(value);
                  }}
                />
              </Box>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "auto",
                  maxHeight: "320px",
                  "& ul": { padding: 0 },
                }}
              >
                {exercises.length > 0 ? (
                  exercises.map((item) => (
                    <DayEntryElement
                      key={item._id}
                      props={item}
                      dayId={item._id}
                      reload={() => onReload(value)}
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
                    <Typography variant="h5">No exercise in here</Typography>
                  </Box>
                )}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CalendarComp;
