const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(css|scss)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html')
        })
    ]
};
