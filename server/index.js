// IMPORT DEPENDENCIES
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api/test", (req, res) => {
  console.log(__dirname);
  const testMessage = "API is working!";
  res.json(testMessage);
});

app.get("/api/getList", (req, res) => {
  const list = ["item1", "item2", "item3"];
  res.json(list);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);
