const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const calendarRoutes = require("./routes/calendarRoutes");
require("dotenv").config();

const app = express();
app.use(express.json()); // must
app.use(cors()); // must
const port = process.env.PORT || 8080;

app.use("/", userRoutes);
app.use("/calendar", calendarRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
