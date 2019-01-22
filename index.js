const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
  console.log(__dirname);
  const testMessage = "API is working!";
  res.json(testMessage);
});

const port = process.env.PORT || 5000;
app.listen(port);
