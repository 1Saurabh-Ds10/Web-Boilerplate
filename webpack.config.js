const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = ["axios", "lodash", "moment"];

const config = {
  context: __dirname,
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js?[chunkhash]"
    //publicPath: '/public/'
  },
  devtool: "cheap-eval-source-map",
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        use: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "es2016", "es2017", "stage-0"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{ loader: "css-loader", options: { minimize: true } }]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 40000
            }
          },
          "image-webpack-loader"
        ]
      }
    ]
  },
 /* devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    //publicPath: 'public/',
    stats: "errors-only",
    open: true,
    hot: true
},*/
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new ExtractTextPlugin({
      filename: "css/style.css?[chunkhash]",
      disable: false,
      allChunks: true
    }),
    new HTMLWebpackPlugin({
      title: "Boilerplate Project",
      minify: {
        collapseWhitespace: true
      },
      //hash: true,
      template: "src/index.html"
    })
  ]
};

module.exports = config;
