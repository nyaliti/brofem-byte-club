const webpack = require('webpack');

module.exports = function override(config) {
  // Add this line to set the hash algorithm
  config.plugins[0].options.hashFunction = 'sha256';
  
  return config;
};
