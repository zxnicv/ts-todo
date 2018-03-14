/**
 * Created by leon on 17/1/19.
 */
'use strict';

const path = require('path');
const AutoPrefixer = require('autoprefixer');
const webpack = require('webpack');
// const InlineManifestWebpackPlugin = require('inline-manifest2-webpack-plugin'); // inline script
var HtmlWebpackPlugin = require('html-webpack-plugin');
const px2rem = require('postcss-px2rem');
const px2remConfigs = {
    baseDpr: 1,
    remUnit: 37.5,
    forcePxComment: '!px',
    keepComment: '!no'
};
const plugins = [
    /*
    * 将manifest打包成inline脚本
    * */
    // new InlineManifestWebpackPlugin({
    //     name: 'webpackManifest',
    //     deleteFile: true
    // }),
    new HtmlWebpackPlugin({
        title: 'typescript首页',
        template: path.resolve(__dirname, '../index.html'), //源index.html的路径
        filename: `./index.html`,                               //输出后的文件名
        // excludeChunks: ['manifest'],                            //输出index.html中需要排除的chunks
        // chunks: ['vendor'],
    }),
];


module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].[chunkhash:10].js',
        chunkFilename: '[id].[chunkhash:10].js', //chunkFileName是异步打包出来块文件的文件名
        crossOriginLoading: "anonymous" // 有chunk并且资源文件是在h5.u51.com的工程
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf|png)(\?.*)?$/,
                use: 'url-loader?limit=10000&name=fonts/[name].[hash:7].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
};

module.exports.plugins = (module.exports.plugins || []).concat(plugins);