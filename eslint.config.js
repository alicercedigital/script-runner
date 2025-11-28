import eslint from "@eslint/js";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
 eslint.configs.recommended,
 typescriptEslint.configs.strict,
 typescriptEslint.configs.stylistic,
 { ignores: ["dist/"] },
 {
  rules: {
   "arrow-body-style": ["error", "always"],
   "@typescript-eslint/triple-slash-reference": "off",
   "@typescript-eslint/consistent-type-definitions": ["error", "type"],
   "object-shorthand": "error",
   "prefer-template": "error",
   "@typescript-eslint/consistent-type-imports": "error",
  },
 },
 {
  files: ["**/*.cjs"],
  rules: { "@typescript-eslint/no-require-imports": "off" },
  languageOptions: { globals: { ...globals.commonjs } },
 },
);
