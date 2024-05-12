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
    <>
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
      {
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateCalendar
            sx={{ width: 500 }}
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
        </LocalizationProvider>
      }

      <Box
        display="flex"
        justifyContent="center"
        aligncontent="center"
        sx={{ width: "100%" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Avatar with text and icon
              </Typography>

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
                {exercises
                  ? exercises.map((item) => (
                      <DayEntryElement
                        key={item._id}
                        props={item}
                        dayId={item._id}
                        reload={() => onReload(value)}
                      />
                    ))
                  : null}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CalendarComp;
