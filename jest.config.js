module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/*.config.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  watchPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components/$1",
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
}
