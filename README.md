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

### Format Error

``` javascript
if(error.isProjectError) {
  return error.json();
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
| IllogicalError        | 500    |
| InternalError         | 500    |
| MethodNotAllowedError | 405    |
| MultiError            | Varies |
| NotFoundError         | 404    |
| NotImplementedError   | 400    |
| RejectedError         | 403    |
| TeapotError           | 418    |
| UnavailableError      | 503    |
| UnhandledError        | 500    |
| UnreachableCodeError  | 500    |

## 📝 Changelog

* v1.0.0 - First release
* v1.1.0 - Add `json()` formatting function
* v1.2.0 - Add `IllogicalError`, `UnhandledError`
* v1.3.0 - Can be constructed with or without `new` keyword
* v1.4.0 - Add `UnauthorizedError`
* v1.4.5 - Fixes versions 1.4.1 - 1.4.4

## 🛣 Roadmap

* Separate lib/http package
* Move formatError to http

## 📜 License

All rights reserved. Safe for use around pets.
