module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "max-len": ["error", { code: 160 }],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["CustomInputLabel"],
        labelAttributes: ["label"],
        controlComponents: ["CustomInput"],
        depth: 3,
      },
    ],
    quotes: [1, "double"],
    "linebreak-style": ["error", "windows"],
    "object-curly-newline": ["error", { multiline: true }],
    "no-alert": 0,
    "no-console": 0,
    "arrow-parens": ["error", "as-needed"],
    "import/no-cycle": [0, { maxDepth: 5 }],
    "react/require-default-props": 0,
    "import/no-extraneous-dependencies": 0,
  },
};
