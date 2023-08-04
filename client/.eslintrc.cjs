module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                "!.eslintrc.{js,cjs}"
            ],
            "excludedFiles": [".eslintrc.{js,cjs}"],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "project" : "./client/tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/comma-dangle": "off",
        "import/no-absolute-path": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-multiple-empty-lines" : "off",
        "prefer-regex-literals": "off",
    }
}
