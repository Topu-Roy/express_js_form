const express = require("express");
const path = require("path");
const port = 5050;

//* Temporary Database array
const usersArray = [];

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//* Setting view engine EJS for rendering HTML
app.set("view engine", "ejs");

//* Setting up api endpoints
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/success", (req, res) => {
  res.render("success");
});
app.get("/users", (req, res) => {
  res.json(usersArray);
});

app.post("/", (req, res) => {
  usersArray.push({ name: req.body.name, email: req.body.email });
  res.redirect("/success");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
