const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
require("@babel/polyfill");

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = [
    merge(common, {
        entry: {
            anp3: ['@babel/polyfill', path.resolve(__dirname, 'lib/crawsite/index.js')]
        },
        optimization: {
            minimize: false
        }
    }),
    merge(common, {
        entry: {
            "anp3.min": path.resolve(__dirname, 'lib/crawsite/index.js')
        }
    }),
    merge(common, {
        entry: {
            test: path.resolve(__dirname, 'lib/test/index')
        },
        optimization: {
            minimize: false
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
    }),
]