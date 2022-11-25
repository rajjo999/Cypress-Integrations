const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 1000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: false,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
