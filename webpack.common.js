const path = require('path');
module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // globalObject: 'this'
        // library: "amp3",
        // libraryTarget: 'umd',
    },
    performance: {
        hints: false
    },
    node: {
        fs: 'empty'
    }
}