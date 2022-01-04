module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:react/recommended",
        "standard",
        "plugin:react/jsx-runtime"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: [2, "never"],
        indent: ["error", 4],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ],
        "multiline-ternary": ["error", "never"],
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "no-unused-vars": 0
    }
}
