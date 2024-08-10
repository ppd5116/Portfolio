const { override, addBabelPlugins, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining"
  ),
  addWebpackModuleRule({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  })
);
