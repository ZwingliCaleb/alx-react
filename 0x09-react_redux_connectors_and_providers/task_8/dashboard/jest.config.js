module.exports = {
    moduleNameMapper: {
      setupFilesAfterEnv: ['./config/setupTests.js'],
      "\\.(css|jpg|png)$": "jest-transform-stub",
    },
  };