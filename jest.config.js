module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['packages/**/*.{js}'],
  moduleFileExtensions: ['js'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  testEnvironmentOptions: { resources: 'usable' },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js)$'],
  transform: {
    '^.+\\.(js)?$': 'babel-jest',
  },
}
