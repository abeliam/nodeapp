import webpack from "webpack"
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ReactRootPlugin from "html-webpack-react-root-plugin"

const config = {
  entry: path.resolve(__dirname, "index.js"),

  output: {
    path: path.resolve(__dirname, "../../../dist/admin"),

    filename: "bundle.js",

    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,

        exclude: /node_modules/,

        loader: "babel-loader",

        options: {
          presets: ["react"],
          plugins: [
            ["module-resolver", {
              "alias": {

              }
            }]
          ]
        }
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
    new ReactRootPlugin("appMountPoint")
  ]
}

export default config
