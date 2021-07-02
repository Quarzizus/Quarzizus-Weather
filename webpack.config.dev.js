const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },

  mode: "development",
  module: {
    rules: [
      //JSX & JS
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // HTML
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      // CSS & SASS
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      // FILES
      {
        test: /\.(png|gif|jpg|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
