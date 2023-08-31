module.exports = {
  setupFilesAfterEnv: ['./config/setupTests.js'],
  moduleNameMapper: {
    "\\.(css|jpg|png)$": "jest-transform-stub",
  },
};
