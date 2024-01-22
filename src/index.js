import errors from "./errors";

export default errors;

export const {
  BadGatewayError,
  BadRequestError,
  ConfigurationError,
  // ERROR, // Intentionally not part of the public API
  ForbiddenError,
  // formatError, // Intentionally not part of the public API
  GatewayTimeoutError,
  GoneError,
  IllogicalError,
  InternalError,
  MethodNotAllowedError,
  MultiError,
  // NAME, // Intentionally not part of the public API
  NotFoundError,
  NotImplementedError,
  // ProjectError, // Intentionally not part of the public API
  // ProjectMultiError, // Intentionally not part of the public API
  RejectedError,
  TeapotError,
  UnauthorizedError,
  UnavailableError,
  UnhandledError,
  UnreachableCodeError,
} = errors;
