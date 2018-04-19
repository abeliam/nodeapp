import webpack from "webpack"
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ReactRootPlugin from "html-webpack-react-root-plugin"
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import pkg from "./package.json"

const config = {
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    vendor: [
         'react',
         'react-dom',
         'react-router-dom',
         'redux'
      ]
  },

  output: {
    path: path.resolve(__dirname, ".storage"),

    filename: "[name].[chunkhash].js",

    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,

        exclude: /node_modules/,

        loader: "babel-loader"
      },
      {
        test: /\.css/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
            name: "[name].[ext]"
          }
        },
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
            name: "[name].[ext]"
          },
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new ReactRootPlugin("appMountPoint"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
    }),
    new webpack.optimize.CommonsChunkPlugin({
          name:'manifest'
    })
    //new BundleAnalyzerPlugin()
  ]
}

export default config
