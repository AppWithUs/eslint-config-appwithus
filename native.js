module.exports = {
  extends: [
    "./core/shared.js",
    "./core/react.js",
    "./core/prettier.js"
  ],
  plugins: [
    "react-native"
  ],
  globals: {
    __DEV__: false,
    Atomics: false,
    ErrorUtils: false,
    FormData: false,
    SharedArrayBuffer: false,
    XMLHttpRequest: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: false,
    clearInterval: false,
    clearTimeout: false,
    fetch: false,
    navigator: false,
    process: false,
    requestAnimationFrame: false,
    requestIdleCallback: false,
    setImmediate: false,
    setInterval: false,
    setTimeout: false,
    window: false,
  },
  rules: {
    // React Native
    "react-native/no-unused-styles": 1,
    "react-native/no-inline-styles": 1,
    "react-native/no-color-literals": 2,
  }
};
