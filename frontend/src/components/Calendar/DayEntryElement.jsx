import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTask } from "../../api/calendar";
import { Box } from "@mui/material";

const DayEntryElement = ({ props, reload }) => {
  const deleteEntry = async (taskId) => {
    await deleteTask(taskId);
    reload();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ListItem
        sx={{
          boxShadow: 3,
          my: 2,
          width: "80%",
        }}
        onClick={() => deleteEntry(props._id)}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`${props.task} ID:${props._id} `}
          // secondary={secondary ? "Secondary text" : null}
        />
      </ListItem>
    </Box>
  );
};

export default DayEntryElement;
