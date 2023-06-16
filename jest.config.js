module.exports = {
    testEnvironment: `jsdom`,
    setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};

module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/_mocks_/file-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [
        `node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`,
    ],
    globals: {
        _PATH_PREFIX_: ``,
    },
    testEnvironmentOptions: {
        url: `http://localhost`,
    },
    setupFiles: [`<rootDir>/loadershim.js`],
};
