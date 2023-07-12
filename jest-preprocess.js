import '@testing-library/jest-dom/extend-expect';

const babelOptions = {
    presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);
