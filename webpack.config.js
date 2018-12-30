const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'public');

module.exports = env => {
    const NODE_ENV = env.NODE_ENV;

    const config = {
        context: sourcePath,
        entry: {
            app: path.resolve(sourcePath, 'entrypoint.js'),
            vendor: ['react', 'react-dom']
        },
        output: {
            path: buildPath,
            filename: '[name].[chunkhash].js'
        },
        // watch: true,
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|assets)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'env'],
                            plugins: ['babel-plugin-transform-object-rest-spread', 'transform-class-properties', 'syntax-dynamic-import']
                        }
                    }
                },
                {
                    test: /\.(sass|scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|gif|jpg)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]'
                        },
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template:
                    NODE_ENV === 'production'
                        ? 'assets/index.html'
                        : 'assets/dev-index.html',
                filename: 'index.html',
                favicon: 'assets/favicon.ico'
            }),
            new MiniCssExtractPlugin({
                filename: 'assets/css/[name]-[chunkhash].css',
                chunkFilename: '[id]-[chunkhash].css'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(NODE_ENV)
                }
            })
        ]
    };

    if (NODE_ENV === 'development') {
        config.devtool = 'eval-source-map';
        config.devServer = {
            contentBase: false,
            host: '0.0.0.0',
            historyApiFallback: true,
            compress: true,
            port: 3006
        };
    }

    if (NODE_ENV === 'production') {
        config.devtool = false;
    }
    config.mode = NODE_ENV;
    config.optimization = {
        splitChunks: { chunks: 'all' }
    };

    return config;
};
