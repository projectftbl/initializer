var path = require('path')
  , chalk = require('chalk')
  , log = require('@ftbl/log');

module.exports = function(app, folder) {

  return function() {
    var name = arguments[0]
      , args = Array.prototype.slice.call(arguments, 1);
      
    log.info(chalk.green(app) + ': initialising ' + chalk.green(name));

    return require(path.join(folder, name)).apply(null, args);
  };
};