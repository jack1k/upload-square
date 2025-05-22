const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "index.bundle.js",
        publicPath: "/",
    },
    devServer: {
        port: 7777,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new ForkTsCheckerWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node-modules/,
                use: { loader: "babel-loader" },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".jsx", ".js", ".tsx", ".ts"],
    },
}
