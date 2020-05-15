const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// require("@babel/polyfill");

module.exports = [
    merge(common, {
        entry: {
            // anp3: ['@babel/polyfill', path.resolve(__dirname, 'lib/crawsite/index.js')]
            anp3: path.resolve(__dirname, 'lib/crawsite/index.js')
        },
        optimization: {
            minimize: false
        }
    }),
    merge(common, {
        entry: {
            example: path.resolve(__dirname, 'examples/index.js')
        },
        optimization: {
            minimize: false
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'examples/index.html',
            })
        ]
    }),
    // merge(common, {
    //     entry: {
    //         "anp3.min": path.resolve(__dirname, 'lib/crawsite/index.js')
    //     }
    // }),
    merge(common, {
        entry: {
            test: path.resolve(__dirname, 'test/index')
        },
        optimization: {
            minimize: false
        },
        plugins: [
            // new CleanWebpackPlugin()
        ],
    }),
]