'use strict';

const EmberAddon = require("ember-cli/lib/broccoli/ember-addon");

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    elm: {
      mainDirs: ['/elm-modules/Main/']
    }
  });

  return app.toTree();
};
