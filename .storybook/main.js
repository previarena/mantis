const path = require('path');
const rules = require('../configs/rules.config');
const aliases = require('./../configs/aliases.config')

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-docs',  
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...aliases
        },
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          ...rules
        ] 
      }
    }
  }
}