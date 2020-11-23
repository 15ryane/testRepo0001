const ManifestPlugin = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  output: {
    filename: "bundle_[hash].js",
    path: __dirname + "/dist"
  },
  devtool: "eval-source-map",
  watchOptions: {
    poll: 1000,
    ignored: ["node_modules"]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "babel-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: { name: "assets/img/[name].[ext]" }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: { name: "assets/fonts/[name].[ext]" }
        }
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      writeToFileEmit: true
    }),
    new HtmlWebpackPlugin({ template: __dirname + "/index.html" }),
    new webpack.DefinePlugin({
      GIT_HASH: process.env.CIRCLE_SHA1
        ? `'${process.env.CIRCLE_SHA1}'`
        : `'local'`
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    hot: true,
    port: 8082, // CHANGE THIS AND UPDATE LOCAL PORTS CONFLUENCE DOC
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  }
};
