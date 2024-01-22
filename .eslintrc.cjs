// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    es6: true,
    "jest/globals": true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: ["jest", "prettier"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/no-commonjs": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "prettier/prettier": ["error"],
  },
};
