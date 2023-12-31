const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const json5 = require('json5');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        menu: './src/menu.js',
        home: './src/home.js',
        contact: './src/contact.js',
        website: './src/website.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Meat O'Malley's",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: 'src/images', to: 'images' 
                },
            ],
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ],
    },
};