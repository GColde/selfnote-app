import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Selection = ({ onChange, value, menuItems }) => {
  //   console.log(value);
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Time</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Time"
        onChange={onChange}
      >
        {/* {menuItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))} */}
        <MenuItem value={"Any"}>Any</MenuItem>
        <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
        <MenuItem value={"Lunch"}>Lunch</MenuItem>
        <MenuItem value={"Dinner"}>Dinner</MenuItem>
        <MenuItem value={"Extra"}>Extra</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selection;
