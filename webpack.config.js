const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.[hash].js',
        sourceMapFilename: '[name].js.map'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            exclude: /node_modules/,
            use: ['babel-loader', 'source-map-loader']
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true,
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /node_modules/,
          },    
        ],
      },
      plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      }), 		
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      ],
      devServer: {
        host: 'localhost',
        port: port,
        open: true,
      },
      devtool: 'source-map'
  };
