const { plugins } = require('chart.js');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build/js'),
        publicPath: '/build/js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    mode: 'development'
};
