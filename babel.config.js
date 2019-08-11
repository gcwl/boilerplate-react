// module.exports = {
//   presets: ["@babel/preset-env", "@babel/preset-react"],
//   plugins: ["react-hot-loader/babel"],
// };

// https://babeljs.io/docs/en/configuration
// https://babeljs.io/docs/en/config-files

module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["react-hot-loader/babel"];

  return {
    presets,
    plugins,
  };
};
