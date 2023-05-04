const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require("path")

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development"
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web"

module.exports = {
  entry: ["./src/sass/style.scss", "./src/js/index.js", "./src/index.html"],
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "docs"),
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],

  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },

  target: target,
  devtool: "source-map",
  devServer: {
    static: ["./dist"],
  },
}
