import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // 👈 ajoute Jest proprement ici
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      react: pluginReact,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    rules: {
      // Tes règles ici si besoin
    },
  },
]);
