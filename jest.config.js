module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/index.ts',
    '!**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@main/(.*)': '<rootDir>/src/Main/$1',
    '@menu/(.*)': '<rootDir>/src/Menu/$1',
    '@config/(.*)': '<rootDir>/src/Main/Config/$1',
    '@designSystem/(.*)': '<rootDir>/src/DesignSystem/$1',
    '@styles/(.*)': '<rootDir>/src/DesignSystem/utils/styles/$1',
    '@jokes/(.*)': '<rootDir>/src/Jokes/$1',
    '@infra/(.*)': '<rootDir>/src/Infra/$1',
  },
};
