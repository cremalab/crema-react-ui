// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
// load the default config generator.
// var webpackConfig = require('../webpack.config.js')
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
// Export a function. Accept the base config as the only param.
module.exports = function(storybookBaseConfig, configType) {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.loaders.push({
    test: /\.(tsx|ts)?$/,
    loader: 'ts-loader',
    // exclude: /node_modules/,
  })

  storybookBaseConfig.resolve = Object.assign({}, storybookBaseConfig.resolve, {
    resolve: {
      // alias: {
      //   'react-native': 'react-native-web'
      // },
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

  })

  // Return the altered config
  return storybookBaseConfig;
};
// module.exports = function(config, env) {
//   var config = genDefaultConfig(config, env);
  // config.resolve = {
  //   extensions: ['', '.js', '.tsx', '.json', '.scss'],
  //   alias: {
  //     'react-native': 'react-native-web'
  //   }
  // }
//   config.module = {
//     rules: webpackConfig.module.rules,
//   }
//   // Extend it as you need.
//
//   return config;
// };

// module.exports = {
//   context: webpackConfig.context,
//   // plugins: webpackConfig.plugins,
//   resolve: {
//     extensions: ['', '.js', '.tsx', '.json', '.scss'],
//     alias: {
//       'react-native': 'react-native-web'
//     }
//   },
//   module: {
//     rules: webpackConfig.module.rules,
//   },
// // };
