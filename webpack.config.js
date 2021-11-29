const path = require("path");

module.exports = {
  entry: path.join(__dirname, "client", "index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, "server", "public"),
    filename: "bundle.js",
    publicPath: "/"
  }
};
