import { config } from "@manadr/eslint-config/base";

export default [
  ...config,
  {
    ignores: ["eslint.config.mjs"],
  },
];