module.exports = {
  "env": {
    "browser": true,
    "es2022": true,
    "node": true
  },

  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-var": "warn",
    "sort-imports": "error",
    "no-unused-vars": [
      1,
      {"argsIgnorePattern": "^_"}
    ],
    "prefer-const": "warn"
  }
};
