import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
const config: StorybookConfig = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config) {
    if (config.resolve?.alias) {
      config.resolve!.alias = {
        ...config.resolve?.alias,
        '@components': path.resolve(__dirname, '../components'),
      };
    }
    return config;
  },
};
export default config;
