const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
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
      plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      })],
      devServer: {
        host: 'localhost',
        port: port,
        open: true,
      },
    
  };
