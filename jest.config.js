module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  watchPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components/$1",
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
}
