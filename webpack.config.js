const webpack = require('webpack');
const path = require('path');

const libraryName = 'crema-react-ui';

module.exports = function (env) {
  return {
    entry: {
      web: "./src/web",
      native: "./src/native"
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]/index.js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      "styled-components": {
          commonjs: "styled-components",
          commonjs2: "styled-components",
          amd: "styled-components",
          root: "_"
      },
      "styled-components/native": {
          commonjs: "styled-components/native",
          commonjs2: "styled-components/native",
          amd: "styled-components/native",
          root: "_"
      },
      "react": {
          commonjs: "react",
          commonjs2: "react",
          amd: "react",
          root: "_"
      },
      "react-dom": {
          commonjs: "react-dom",
          commonjs2: "react-dom",
          amd: "react-dom",
          root: "_"
      },
      "react-native": {
          commonjs: "react-native",
          commonjs2: "react-native",
          amd: "react-native",
          root: "_"
      },
      "react-native-web": {
          commonjs: "react-native-web",
          commonjs2: "react-native-web",
          amd: "react-native-web",
          root: "_"
      }
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: "source-map-loader",
          exclude: /node_modules/,
        },
      ]
    },
    plugins:[
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: false
        },
        compress: {
          warnings: false,
          dead_code: true,
          unused: true
        },
        comments: false
      })
    ],
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    devtool: 'inline-source-map',
  }
};
