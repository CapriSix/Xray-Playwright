module.exports = {
    browsers: ["chromium"],
    exitOnPageError: false,
    launchOptions: {
        headless: true
    },
    contextOptions: {
        recordVideo: {
            dir: "<rootDir>/videos/"
        }
    }

}