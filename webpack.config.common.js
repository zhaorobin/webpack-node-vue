const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './app/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'webpack-node-vue',
            template: './app/index.html',
            chunksSortMode: 'dependency',
            inject: true,
            filename: '../index.html',
        }),
        new HtmlWebpackPlugin({
            template: './app/404.html',
            inject: false,
            filename: '../404.html',
        }),

    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public', 'js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', "stage-0"]
                        }

                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'vue-loader'

                    }
                ]
            },
            {
                test: /\.(png|gif|svg|jpg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}
