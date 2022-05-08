/* eslint-disable max-classes-per-file */
const HTTP = require("@knowdev/http");
const log = require("@knowdev/log");
const formatError = require("./formatError");

//
//
// Helpers
//

const proxyClassAsFunction = {
  apply: (target, thisArgument, argumentsList) =>
    // eslint-disable-next-line new-cap
    new target(...argumentsList),
};

//
//
// Constants
//

const NAME = "ProjectError";

const ERROR = {
  MESSAGE: {
    BAD_GATEWAY: "An unexpected error occurred on an upstream resource",
    BAD_REQUEST: "The request was not properly formatted",
    CONFIGURATION_ERROR:
      "The application responding to the request encountered a configuration error",
    FORBIDDEN: "Access to this resource is not authorized",
    GATEWAY_TIMEOUT:
      "The connection timed out waiting for an upstream resource",
    GONE: "The requested resource is no longer available",
    ILLOGICAL:
      "The application encountered an illogical condition while processing the request",
    INTERNAL_ERROR:
      "An unexpected error occurred and the request was unable to complete",
    METHOD_NOT_ALLOWED: "The requested method is not allowed",
    NOT_FOUND: "The requested resource was not found",
    NOT_IMPLEMENTED:
      "The request was understood but the resource is not implemented",
    REJECTED: "The request was rejected prior to processing",
    TEAPOT: "This resource is a teapot incapable of processing the request",
    UNAVAILABLE: "The requested resource is temporarily unavailable",
    UNHANDLED:
      "An unhandled error occurred and the request was unable to complete",
    UNREACHABLE_CODE:
      "The application encountered an unreachable condition while processing the request",
  },
  TITLE: {
    BAD_GATEWAY: "Bad Gateway",
    BAD_REQUEST: "Bad Request",
    CONFIGURATION_ERROR: "Internal Configuration Error",
    FORBIDDEN: "Forbidden",
    GATEWAY_TIMEOUT: "Gateway Timeout",
    GONE: "Gone",
    INTERNAL_ERROR: "Internal Application Error",
    METHOD_NOT_ALLOWED: "Method Not Allowed",
    NOT_FOUND: "Not Found",
    NOT_IMPLEMENTED: "Not Implemented",
    REJECTED: "Request Rejected",
    TEAPOT: "Teapot",
    UNAVAILABLE: "Service Unavailable",
  },
};

//
//
// Public Classes
//

class ProjectError extends Error {
  constructor(
    message = ERROR.MESSAGE.INTERNAL_ERROR,
    {
      status = HTTP.CODE.INTERNAL_ERROR,
      title = ERROR.TITLE.INTERNAL_ERROR,
    } = {}
  ) {
    super(message);
    this.title = title;
    this.detail = message;
    this.status = status;
    this.name = NAME;
    this.isProjectError = true;
    this.json = () => {
      // eslint-disable-next-line no-shadow
      const { data, status } = formatError(this);
      this.status = status;
      return data;
    };
  }
}

class ProjectMultiError extends Error {
  constructor(errors = []) {
    super();
    this.errors = errors;
    this.name = NAME;
    this.isProjectError = true;
  }
}

//
//
// Error Functions (to throw)
//

// Standard HTTP

const BadGatewayError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.BAD_GATEWAY) {
      return new ProjectError(message, {
        status: HTTP.CODE.BAD_GATEWAY,
        title: ERROR.TITLE.BAD_GATEWAY,
      });
    }
  },
  proxyClassAsFunction
);

const BadRequestError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.BAD_REQUEST) {
      return new ProjectError(message, {
        status: HTTP.CODE.BAD_REQUEST,
        title: ERROR.TITLE.BAD_REQUEST,
      });
    }
  },
  proxyClassAsFunction
);

const ForbiddenError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.FORBIDDEN) {
      return new ProjectError(message, {
        status: HTTP.CODE.FORBIDDEN,
        title: ERROR.TITLE.FORBIDDEN,
      });
    }
  },
  proxyClassAsFunction
);

const GatewayTimeoutError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.GATEWAY_TIMEOUT) {
      return new ProjectError(message, {
        status: HTTP.CODE.GATEWAY_TIMEOUT,
        title: ERROR.TITLE.GATEWAY_TIMEOUT,
      });
    }
  },
  proxyClassAsFunction
);

const GoneError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.GONE) {
      return new ProjectError(message, {
        status: HTTP.CODE.GONE,
        title: ERROR.TITLE.GONE,
      });
    }
  },
  proxyClassAsFunction
);

const InternalError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.INTERNAL_ERROR) {
      return new ProjectError(message, {
        status: HTTP.CODE.INTERNAL_ERROR,
        title: ERROR.TITLE.INTERNAL_ERROR,
      });
    }
  },
  proxyClassAsFunction
);

const MethodNotAllowedError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.METHOD_NOT_ALLOWED) {
      return new ProjectError(message, {
        status: HTTP.CODE.METHOD_NOT_ALLOWED,
        title: ERROR.TITLE.METHOD_NOT_ALLOWED,
      });
    }
  },
  proxyClassAsFunction
);

const NotFoundError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.NOT_FOUND) {
      return new ProjectError(message, {
        status: HTTP.CODE.NOT_FOUND,
        title: ERROR.TITLE.NOT_FOUND,
      });
    }
  },
  proxyClassAsFunction
);

const TeapotError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.TEAPOT) {
      return new ProjectError(message, {
        status: HTTP.CODE.TEAPOT,
        title: ERROR.TITLE.TEAPOT,
      });
    }
  },
  proxyClassAsFunction
);

const UnavailableError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.UNAVAILABLE) {
      return new ProjectError(message, {
        status: HTTP.CODE.UNAVAILABLE,
        title: ERROR.TITLE.UNAVAILABLE,
      });
    }
  },
  proxyClassAsFunction
);

// Special Errors

const ConfigurationError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.CONFIGURATION_ERROR) {
      return new ProjectError(message, {
        status: HTTP.CODE.INTERNAL_ERROR,
        title: ERROR.TITLE.CONFIGURATION_ERROR,
      });
    }
  },
  proxyClassAsFunction
);

const IllogicalError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.ILLOGICAL) {
      log.warn("Encountered illogical code block");
      return new ProjectError(message, {
        status: HTTP.CODE.INTERNAL_ERROR,
        title: ERROR.TITLE.INTERNAL_ERROR,
      });
    }
  },
  proxyClassAsFunction
);

const MultiError = (errors) => new ProjectMultiError(errors);

const RejectedError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.REJECTED) {
      return new ProjectError(message, {
        status: HTTP.CODE.FORBIDDEN,
        title: ERROR.TITLE.REJECTED,
      });
    }
  },
  proxyClassAsFunction
);

const NotImplementedError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.NOT_IMPLEMENTED) {
      return new ProjectError(message, {
        status: HTTP.CODE.BAD_REQUEST,
        title: ERROR.TITLE.NOT_IMPLEMENTED,
      });
    }
  },
  proxyClassAsFunction
);

const UnhandledError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.UNHANDLED) {
      log.warn("Encountered illogical code block");
      return new ProjectError(message, {
        status: HTTP.CODE.INTERNAL_ERROR,
        title: ERROR.TITLE.INTERNAL_ERROR,
      });
    }
  },
  proxyClassAsFunction
);

const UnreachableCodeError = new Proxy(
  class {
    constructor(message = ERROR.MESSAGE.UNREACHABLE_CODE) {
      log.warn("Encountered illogical code block");
      return new ProjectError(message, {
        status: HTTP.CODE.INTERNAL_ERROR,
        title: ERROR.TITLE.INTERNAL_ERROR,
      });
    }
  },
  proxyClassAsFunction
);

//
//
// Export
//

module.exports = {
  BadGatewayError,
  BadRequestError,
  ConfigurationError,
  ERROR,
  ForbiddenError,
  formatError,
  GatewayTimeoutError,
  GoneError,
  IllogicalError,
  InternalError,
  MethodNotAllowedError,
  MultiError,
  NAME,
  NotFoundError,
  NotImplementedError,
  ProjectError,
  ProjectMultiError,
  RejectedError,
  TeapotError,
  UnavailableError,
  UnhandledError,
  UnreachableCodeError,
};
