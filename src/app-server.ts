const express = require("express");
import * as path from "path";
import analysis from "./index"

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/analysis", (req, res) => {
    let analysedText = analysis((req.body.text).toLowerCase());
    res.send(analysedText)
});

app.set("title", "Product Finder");
app.set("view engine", "pug");
app.set("views", "./out/views");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
