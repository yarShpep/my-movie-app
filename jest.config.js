module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios).+\\.js$',
    ],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };