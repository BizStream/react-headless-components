module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
  roots: ['./src'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*stories.{tsx,jsx}',
    '!src/index.ts',
    '!src/types/*'
  ]
}
