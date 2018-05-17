const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },

    devServer: {
        contentBase: './',
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    }
}