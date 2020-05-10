const path = require('path');
module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: "amp3",
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    performance: {
        hints: false
    },
    node: {
        fs: 'empty'
    },
}