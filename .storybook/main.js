module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // Add aliases manually for Chakra due to https://github.com/storybookjs/storybook/issues/13114
    config.resolve.alias["@emotion/core"] = "@emotion/react";
    config.resolve.alias["emotion-theming"] = "@emotion/react";
    return config;
  },
};
