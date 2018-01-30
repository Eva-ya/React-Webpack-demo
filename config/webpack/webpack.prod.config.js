var path = require('path');
var webpack = require('webpack');
// 引入ExtractTextPlugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../index.js');

//配置webpack的入口为public目录下的index.js,转换后生成的文件为public/out.js
module.exports = {
    entry: {
        main: [
            // 'react-hot-loader/patch',
            // 'webpack-hot-middleware/client',
            './src/index.js'
        ]
    },
    // 配置上下文到项目根目录，这样可以使用相对根目录的路径访问其他文件，如下面的'./template/index.html'
    context: config.rootPath,
    //解决缓存问题
    output: {
        filename: '[name].[hash:8].js',
        chunkFilename: 'chunk.[id].[hash:8].js',
        publicPath: config.publicPath,
        // path: path.resolve(__dirname, 'public')
    },
    module: {
        //配置规则：匹配到node_modules以外的js后缀的文件就会使用babel-loader进行转换，转换过程中一次使用了plugins和presets指定的扩展
        //presets(从右到左执行)
        rules: [{
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react'],
                        plugins: [
                            ['react-hot-loader/babel'],
                            ['import', { "libraryName": "antd", "style": "css" }]
                        ]
                    }
                }
            },
            {
                test: /-m\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]-[local]-[hash:base64:5]'
                        }
                    }]
                })

            },
            {
                test: /^((?!(-m)).)*\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                // 当前项目的less文件，启用CSS modules
                test: /\.less$/,
                include: [config.srcPath],
                exclude: [config.libPath],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 3,
                                localIdentName: '[path][name]-[local]-[hash:base64:5]'
                            }
                        },
                        {
                            loader: path.resolve(__dirname, '..', 'loader/less-css-modules-assets-fix-loader.js')
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.woff(\?.*)?$/,
                use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?.*)?$/,
                use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=application/font-woff2'
            },
            {
                test: /\.otf(\?.*)?$/,
                use: 'file-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=font/opentype'
            },
            {
                test: /\.ttf(\?.*)?$/,
                use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?.*)?$/,
                use: 'file-loader?prefix=fonts/&name=[name]_[hash:8].[ext]'
            },
            {
                test: /\.svg(\?.*)?$/,
                use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: 'url-loader?limit=8192'
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'), // 样式将输出到styles.css
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        //保证出错时页面不阻塞，在编译结束时报错
        new webpack.NoEmitOnErrorsPlugin(),
        //对第三方插件进行代码分割
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                // TODO 对其他第三方依赖也要在这里进行代码分割
                return module.context && module.context.indexOf('jquery') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        //动态命名导出文件
        new HtmlWebpackPlugin({
            template: './template/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'styles.[contenthash].css'
        })

    ]
}