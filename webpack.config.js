module.exports = {
  mode: "development", //development为开发者模式，production为用户模式
  entry: "./src/index.js", // string | object | array
  output: {
    filename: "index.js", //默认是生成main.js,可修改
    filename: "[contenthash].js",
  },
};
