module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // Prettier와 충돌을 방지하기 위해 추가
  ],
  plugins: ["react", "@typescript-eslint", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    // 필요에 따라 규칙을 추가합니다.
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
