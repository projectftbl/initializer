var Promise = require('bluebird')
  , fs = require('fs')
  , path = require('path');

module.exports = Promise.method(function(directory) {
  if (fs.existsSync(directory) === false) return;

  var files = fs.readdirSync(directory);

  return Promise.all(files.map(function(file) {
    return require(path.join(directory, file))();
  }));
});