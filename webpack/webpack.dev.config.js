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
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    postcss: [
                        // px2rem(px2remConfigs),
                    ],
                    // 配置处理.vue文件中样式的loader
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
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