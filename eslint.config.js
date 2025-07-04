import { defineConfig } from "eslint/config";

export default defineConfig({
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": "warn",
  },
});
