const path = require("path");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/client/client.js",
  watch: true,
  output: {
    filename: "js/boundle.js",
    path: path.resolve(__dirname, "./public"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx"],
  },
};
