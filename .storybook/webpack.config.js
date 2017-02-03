var path = require('path')

module.exports = {
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    root: path.join(__dirname, "../src")
  }
}
