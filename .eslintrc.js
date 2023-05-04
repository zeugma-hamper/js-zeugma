module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-var": "warn",
        "no-empty": "off",
        "no-unexpected-multiline": "off",
        "semi": ["error", "always"],
        // "sort-imports": "error",
        "no-unused-vars": [
            0,
            {"argsIgnorePattern": "^_"}
        ],
        "prefer-const": "warn"
    }
}
