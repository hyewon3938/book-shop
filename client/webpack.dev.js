const path = require("path");
const Dotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    // inline: true,
    port: 3001,
    hot: true,
    // publicPath: "/",
    open: true,
    proxy: {
      "/api": "http://localhost:5001",
    },
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.development"),
    }),
  ],
});
