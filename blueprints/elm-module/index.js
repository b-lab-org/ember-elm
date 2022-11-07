const { classify } = require("ember-cli-string-utils");

module.exports = {
  description: "Generates an Elm module",

  locals(options) {
    return {
      elmModuleName: classify(options.entity.name)
    };
  },

  fileMapTokens() {
    return {
      "__elm-module-name__"({ locals }) {
        return classify(locals.elmModuleName);
      }
    };
  }
};
