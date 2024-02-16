const config = require("config");
const ApiError = require("./ApiError");
const logger = require("../logger");

const env = config.get("env");

exports.errorConverter = (
  err,
  _req,
  _res,
  next
) => {
  let error = err;
  logger.debug("debug api err instance " + error);
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || 500;
    const message =
      error.message || "bad request error or internal server error";
    error = new ApiError(statusCode, message, false, err.stack);
    // error = new ApiError(statusCode, message, false);
  }
  logger.debug("debug status code " + error.statusCode);
  next(error);
};

// eslint-disable-next-line no-unused-vars
exports.errorHandler = (
  err,
  _req,
  res,
  _next
) => {
  let { statusCode, message } = err;
  if (env === "production" && !err.isOperational) {
    statusCode = 500; // INTERNAL_SERVER_ERROR
    message = "Internal Server Error";
  }

  res.locals["errorMessage"] = err.message;

  const response = {
    success: false,
    code: statusCode,
    message,
    ...(env === "development" && { stack: err.stack }),
  };

  logger.error(err.message);

  res.status(statusCode).send(response);
};
