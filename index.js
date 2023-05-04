const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");

const port = 5050;

//* Connect to database MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "express-form" })
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

//* Schema for mongoDB
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const message = mongoose.model("messages", messageSchema);

//* Initialize Server
const app = express();

// * Middleware Setup
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//* Setting view engine EJS for rendering HTML
app.set("view engine", "ejs");

//* Setting up api endpoints
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/form", async (req, res) => {
  const { name, email } = req.body;
  await message.create({ name, email });
  res.redirect("/success");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/users", (req, res) => {
  res.json(usersArray);
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
