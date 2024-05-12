import { Box } from "@mui/material";
import CalendarComp from "../../components/Calendar/CalendarComp";

const Calendar = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box sx={{ width: { xs: "100%", lg: "100%" } }}>
          <CalendarComp />
        </Box>
      </Box>
    </>
  );
};

export default Calendar;
