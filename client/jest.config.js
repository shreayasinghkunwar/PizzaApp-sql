module.exports = {

    collectCoverageFrom: ['src/**/*.{js,jsx}'],

    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
