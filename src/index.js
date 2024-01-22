const errors = require("./errors");

delete errors.ERROR;
delete errors.formatError;
delete errors.NAME;
delete errors.ProjectError;
delete errors.ProjectMultiError;

module.exports = {
  ...errors,
  default: errors,
};
