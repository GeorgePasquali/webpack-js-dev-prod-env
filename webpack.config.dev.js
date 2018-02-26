import path from 'path';

const libraryName = "myLib"; // Think of replacing this with the name inside package.json

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index')
  ],

  output: { // simulate the existance of this file in the dir ./src (For dev server)
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'myLib.bundle.js'
  },

  devtool: "sourcemap",

  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }


};
