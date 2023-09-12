const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './src',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    './src/{pages,components}/**/*.{ts,tsx}',
    '!./src/pages/_app.tsx',
    '!./src/pages/_document.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};
module.exports = createJestConfig(customJestConfig);
