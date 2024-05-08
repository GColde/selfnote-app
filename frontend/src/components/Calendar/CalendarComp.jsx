import { useState, useEffect } from "react";
import {
  LocalizationProvider,
  PickersDay,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Badge, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { getHighlitedDays } from "../../api/calendar";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const CalendarComp = () => {
  const [dbDays, setdbDays] = useState();
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([]);
  const sendValue = { email: "random@gmail.com" };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHighlitedDays(sendValue);
        setdbDays(result.data);

        const year = value.getFullYear();
        const month = value.toLocaleString("default", {
          month: "short",
        });
        setHighlightedDays([...result.data.dates[year][month]]);
        //nustatyti sita kad iskarot atejas butu teisingas menuo ir padaryti funkcija kad pakeitus pasifetchina nauja data
        // setHighlightedDays([1, 2, 3]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {dbDays ? (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateCalendar
            variant="static"
            orientation="portrait"
            value={value}
            disableFuture
            onChange={(newValue) => {
              setValue(newValue);
              console.log(value.getDate());
            }}
            onMonthChange={(monthValue) => {
              const year = monthValue.getFullYear();
              const month = monthValue.toLocaleString("default", {
                month: "short",
              });
              setHighlightedDays(
                dbDays.dates[year][month] ? [...dbDays.dates[year][month]] : []
              );
              console.log(month);
              console.log(dbDays.dates[year][month]);
            }}
            slots={{
              day: (props) => {
                const isSelected =
                  !props.outsideCurrentMonth &&
                  highlightedDays.indexOf(props.day.getDate()) >= 0;
                // dbDays.dates[2024].May.indexOf(props.day.getDate()) >= 0; // sita vieta <<<<<

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
      ) : null}
    </>
  );
};

export default CalendarComp;
