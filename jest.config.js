module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "Coverage",
  coverageProvider: "v8",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
