const { override } = require('customize-cra');

module.exports = {
  jest: override(config => {
    config.preset = 'ts-jest';
    config.testEnvironment = 'jsdom';
    config.transform = {
      '^.+\\.tsx?$': 'ts-jest',
    };
    config.moduleNameMapper = {
      '\\.(css|less)$': 'identity-obj-proxy',
    };
    return config;
  }),
};