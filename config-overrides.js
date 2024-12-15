// npm install react-app-rewired customize-cra terser-webpack-plugin --save-dev

const { override, addBabelPreset, addWebpackPlugin } = require('customize-cra');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = override(
  addBabelPreset('minify'),
  (config) => {
    if (config.optimization) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console logs
            },
          },
        })
      );
    }
    return config;
  }
);
