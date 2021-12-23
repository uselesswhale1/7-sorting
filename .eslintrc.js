module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [2, "never"],
        "space-before-function-paren": ["error", "never"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "no-unused-expressions": ["error", { enforceForJSX: false }],
        "multiline-ternary": ["error", "never"]
    }
}
