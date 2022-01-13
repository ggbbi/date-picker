const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"
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