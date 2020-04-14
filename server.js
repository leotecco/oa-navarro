const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.port || 3000;

const userRoutes = require("./src/app/routes/user-routes");

mongoose.connect(
  "mongodb+srv://leotecco:leotecco@cluster0-8hzev.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("server on");
});
