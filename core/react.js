module.exports = {
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: [
    "react"
  ],
  rules: {
    "react/display-name": 0,
    "react/jsx-boolean-value": 0,
    "jsx-quotes": [1, "prefer-double"],
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 0,
    "react/jsx-no-undef": 2
  }
}
