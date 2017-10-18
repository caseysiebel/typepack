const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ETP = require('extract-text-webpack-plugin');

const config = {
    //entry: './src/index.tsx',
    //context: path.join(__dirname, 'src'),
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: ETP.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader!sass-loader'
                }),
                include: path.join(__dirname, 'src')
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        inline: true,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/html', 'index.html'),
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ETP('styles.css'),
    ]
};

module.exports = config;
