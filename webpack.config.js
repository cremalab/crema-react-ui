var path = require('path');

var libraryName = 'crema-react-ui';

module.exports = {
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
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     },
     {
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
     },
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 devtool: 'inline-source-map',
};
