const { defineConfig } = require("cypress")
const fs = require('fs-extra')
const path = require('path')

module.exports = defineConfig({
  defaultCommandTimeout: 80000,
  requestTimeout: 100000,
  pageLoadTimeout: 160000,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || "production"
      const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)
      return fs.readJson(pathToConfigFile)
    }
  }
})