import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

const Selection = ({ onChange, value, selectionItems }) => {
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
        {selectionItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Selection.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  selectionItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Selection;
