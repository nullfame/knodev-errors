# KnowDev Errors 🚒

## 📋 Usage

### Installation

``` bash
npm install --save @knowdev/errors
```

### Throwing/Catching Errors

``` javascript
// See `Reference` for full list
const { InternalError } = require("@knowdev/errors");

try {
  // Code happens...
  throw InternalError("Oh, I am slain!");
} catch (error) {
  // Is this from @knowdev/errors?
  if(error.isProjectError) {
    {
      name,   // ProjectError
      title,  // "Internal Server Error"
      detail, // "Oh, I am slain"
      status, // 500 (HTTP code)
    } = error;
  } else {
    // Not from @knowdev/errors
    throw error;
  }
}
```

### Multi-Error Usage

``` javascript
const errors = [];
errors.push(BadGatewayError());
errors.push(NotFoundError());
throw MultiError(errors);
```

## 📖 Reference

| Error                 | Status |
| --------------------- | ------ |
| BadGatewayError       | 502    |
| BadRequestError       | 400    |
| ConfigurationError    | 500    |
| ForbiddenError        | 403    |
| GatewayTimeoutError   | 504    |
| GoneError             | 410    |
| InternalError         | 500    |
| MethodNotAllowedError | 405    |
| MultiError            | Varies |
| NotFoundError         | 404    |
| NotImplementedError   | 400    |
| RejectedError         | 403    |
| TeapotError           | 418    |
| UnavailableError      | 503    |
| UnreachableCodeError  | 500    |

## 📝 Changelog

* v1.0.0 - First release

## 🛣 Roadmap

* Separate lib/http package
* Move formatError to http

## 📜 License

All rights reserved. Safe for use around pets.
