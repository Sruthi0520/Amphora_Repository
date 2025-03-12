const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  retries: 1,
  experimentalModifyObstructiveThirdPartyCode: true,
  modifyObstructiveCode: true,
  defaultCommandTimeout: 120000,
  execTimeout: 120000,
  chromeWebSecurity: false,
  pageLoadTimeout: 120000,
  responseTimeout: 120000,
  requestTimeout: 120000,
  videoUploadOnPasses: true,
  video: true,
  viewportWidth: 1280,
  viewportHeight: 720,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    specPattern: "**/*.feature",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      charts: true
    },
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      require('cypress-mochawesome-reporter/plugin')(on);
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});
