const express = require("express");
const path = require("path");
const port = 5050;

const app = express();
app.use(express.static(path.join(__dirname, "public")));

//* Setting view engine EJS for rendering HTML
app.set("view engine", "ejs");

//* Setting up api endpoints
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
