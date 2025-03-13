const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/server/server.js",
  target: "node",
  watch: true,
  output: {
    filename: "server/server.js",
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
  externals: [nodeExternals()], // node_modules 需要排除掉，因为在node环境，可以直接操作文件导入模块
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx"],
  },
};
