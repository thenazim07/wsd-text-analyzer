const log4js =  require("log4js");
const config = require("config");

const logConfiguration = config.get("log4js");

log4js.configure(logConfiguration);

module.exports = log4js;
