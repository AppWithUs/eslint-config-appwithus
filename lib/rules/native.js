// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  'react-native/no-unused-styles': 1,
  'react-native/no-inline-styles': 1,
  'react-native/no-color-literals': 2,
};
