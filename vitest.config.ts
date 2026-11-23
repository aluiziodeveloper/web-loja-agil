import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: ["src/vitest.setup.ts"],
      projects: [
        {
          test: {
            name: "unit",
            environment: "jsdom",
            include: [
              "src/__specs__/**/*.spec.{ts,tsx}",
              "src/core/__specs__/**/*.spec.{ts,tsx}",
              "src/pattern/__specs__/**/*.spec.{ts,tsx}",
              "src/features/**/__specs__/**/*.spec.{ts,tsx}",
            ],
          },
        },
        {
          test: {
            name: "integration",
            environment: "jsdom",
            include: ["src/routes/__specs__/**/*.spec.{ts,tsx}"],
          },
        },
      ],
    },
  }),
);
