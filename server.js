const express = require("express");
const routes = require("./src/routes");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json("Text Analyzer!");
});
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Text Analyzer listening on port ${port}`);
});
