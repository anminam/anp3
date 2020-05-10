const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = [
    merge(common, {
        entry: {
            anp3: path.resolve(__dirname, 'lib/crawsite/index.js')
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
        optimization: {
            minimize: false
        }
    }),
    merge(common, {
        entry: {
            "anp3.min": path.resolve(__dirname, 'lib/crawsite/index.js')
        }
    }),
]