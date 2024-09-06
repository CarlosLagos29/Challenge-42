import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";

export default [
 
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.test.js"], 
    plugins: {
      jest: pluginJest, 
    },
    languageOptions: {
      globals: {
        ...globals.jest 
      }
    },
    rules: {
      "no-undef": "off", 
      "no-unused-vars": "off"
    }
  }
];
