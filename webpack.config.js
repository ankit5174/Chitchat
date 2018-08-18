const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const config = require("./config/index");
const outputDirectory = "dist";
module.exports = {
    entry: ["babel-polyfill","./client/index.js"],
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: "url-loader?limit=100000"
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: `${config.app.serverHost}:${config.app.serverPort}`,
                secure: false,
                changeOrigin: true
            },
            '/socket.io': {
                target: `${config.app.serverHost}:${config.app.serverPort}`,
                ws: true
            }
        },
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        })
    ]
};