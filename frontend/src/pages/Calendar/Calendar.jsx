import { Box } from "@mui/material";
import CalendarCompV2 from "../../components/Calendar/CalendarCompV2";

const Calendar = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
          <CalendarCompV2 />
        </Box>
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}></Box>
      </Box>
    </>
  );
};

export default Calendar;
