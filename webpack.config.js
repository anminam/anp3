const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        test: path.resolve(__dirname, 'lib/test')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'test',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    performance: {
        hints: false
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}