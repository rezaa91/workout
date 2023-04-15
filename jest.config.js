/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@workout/(.*)': '<rootDir>/src/workout/$1'
  }
};