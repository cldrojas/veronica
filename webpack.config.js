const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules: [{
                test: /\.js?$/,
                exclude: /node_modules/, //don't test node_modules folder
                use: {
                    loader: "babel-loader",
                },
            },
            //Allows use of svelte
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                },
            },
            //Allows use of CSS
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            //Allows use of images
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: "file-loader",
            },
        ],
    },
    plugins: [
        /* new HtmlWebpackPlugin([{
                                inject: true,
                                template: "./public/index.html",
                                filename: "./index.html",
                            }, ]), */
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        //new DotenvWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve("./public/index.html"),
                to: "./",
            }, {
                from: path.resolve("./public/favicon.png"),
                to: "./",
            }, ],
        }),
    ],
};