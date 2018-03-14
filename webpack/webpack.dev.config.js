'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const AutoPrefixer = require('autoprefixer');
const px2rem = require('postcss-px2rem');
const px2remConfigs = {
    baseDpr: 1,
    remUnit: 37.5,
    forcePxComment: '!px',
    keepComment: '!no'
};
const common = require('./webpack.common.config');

const dev = {
    output: {
        filename: '[name].[hash:10].js',
    },
    module: {
        rules: [
            // {
            //     test: /\.js|\.jsx$|\.vue$/,
            //     loader: 'eslint-loader',
            //     enforce: 'pre',
            //     exclude: /node_modules/
            // },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader', options: {
                        plugins: [px2rem(px2remConfigs), AutoPrefixer({browsers: ['last 20 versions']})]
                    }
                }, 'sass-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader', options: {
                        plugins: [px2rem(px2remConfigs), AutoPrefixer({browsers: ['last 20 versions']})]
                    }
                }],
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader', options: {
                        plugins: [px2rem(px2remConfigs), AutoPrefixer({browsers: ['last 20 versions']})]
                    }
                }, 'less-loader'],
            }, {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    postcss: [
                        px2rem(px2remConfigs),
                        AutoPrefixer({browsers: ['last 20 versions']}),
                    ],
                    loaders: {
                        css: 'style-loader!css-loader!postcss-loader',
                        sass: 'style-loader!css-loader!postcss-loader!sass-loader',
                        scss: 'style-loader!css-loader!postcss-loader!sass-loader',
                        less: 'style-loader!css-loader!postcss-loader!less-loader',
                    }
                }
            }
        ],
    },
    plugins: [
        /*
        * 注入环境变量，可直接在js中使用
        * */
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
                canUseVconsole: JSON.stringify(true),
            }
        }),
    ],
    devtool: "#inline-source-map",
    /*
    * 代理请求
    * */
    devServer: {
        contentBase: "./src",
        // proxy: proxy,
        disableHostCheck: true
    },
    performance: {
        hints: false
    },
};

module.exports = merge(common, dev);