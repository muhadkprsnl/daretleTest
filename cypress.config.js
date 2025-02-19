const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        chromeWebSecurity: false,
        baseUrl: process.env.BASE_URL || 'https://academy-dev.dartle.app/', // Default to dev URL
        video: true,
        videoUploadOnPasses: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
            return config;
        },
        testIsolation: false,
        watchForFileChanges: false,
        experimentalSessionAndOrigin: true,
        //screenshotOnRunFailure: true

    },

});