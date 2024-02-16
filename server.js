const express = require("express");
const routes = require("./src/routes");
const errors = require("./errors")

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json("Text Analyzer!");
});
app.use("/api", routes);
app.use((_req, _res, next) => next(new errors.ApiError(404, "Route Not found")));
app.use(errors.errorConverter);
app.use(errors.errorHandler);

app.listen(port, () => {
  console.log(`Text Analyzer listening on port ${port}`);
});
