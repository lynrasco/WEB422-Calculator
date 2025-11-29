const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", //Used to show the calculator
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
