import { defineConfig } from "eslint/config";
import oxlint from "eslint-plugin-oxlint";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["dist/**", "node_modules/**", "public/**"],
  },
  ...tseslint.configs.recommended,
  ...oxlint.configs["flat/recommended"],
);
