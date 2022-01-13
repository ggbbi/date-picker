const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: "./client/dist/index.html",
  output: {
    // options related to how webpack emits results
    path:path.resolve(__dirname, "client", "dist"),
    filename: "bundle.js",
    // the filename template for entry chunks
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
      }
    ]
  }
}