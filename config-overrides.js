const { override, addWebpackAlias } = require('customize-cra');
// const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const addJsonMinimizerWebpackPlugin = (config) => {
  config.plugins.push(new JsonMinimizerPlugin());
  return config;
};

const addCssMinimizerPlugin = (config) => {
  config.plugins.push(new CssMinimizerPlugin());
  return config;
};

module.exports = override(
  addWebpackAlias({
    react: 'preact/compat',
    'react-dom': 'preact/compat'
  })
  // addJsonMinimizerWebpackPlugin,
  // addCssMinimizerPlugin
);
