const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const app = express();
const cors = require("cors");
const postRoutes = require("./src/routes/post.routes");
const commentRoutes = require("./src/routes/comment.routes");

app.use(bodyParser.json());
app.use(cors());
app.use("/api/post", postRoutes);
app.use("/api/comment/", commentRoutes);

app.listen(3001, async () => {
  console.log("Server is running on port 3000");
  await sequelize.authenticate();
});
