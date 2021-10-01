module.exports = {
    browsers: ["chromium"],
    exitOnPageError: false,
    launchOptions: {
        headless: false
    },
    contextOptions: {
        recordVideo: {
            dir: "<rootDir>/videos/"
        }
    }

}