module.exports = {
    verbose : true,
    preset: 'jest-playwright-preset',
    transform:{
        "^.+\\.tsx?$": "ts-jest"
    },
    reporters : ["default", "jest-junit"]
}