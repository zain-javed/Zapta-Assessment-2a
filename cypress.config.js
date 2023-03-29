module.exports = {
  viewportWidth: 1900,
  viewportHeight: 1050,
  numTestsKeptInMemory: 0,
  projectId: 'c9fzwn',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
}
