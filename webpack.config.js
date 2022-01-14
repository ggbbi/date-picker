const path = require('path')

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: "./client/src/index.jsx",
  output: {
    path:path.resolve(__dirname, "client", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  }
}