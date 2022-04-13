export default {
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!./src/**/index.ts',
    '!./src/**/(main|apm|express|open-api).ts',
  ],
  coverageDirectory: './coverage',
  coverageProvider: 'v8',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
