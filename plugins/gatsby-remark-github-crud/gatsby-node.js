"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _urlJoin = _interopRequireDefault(require("url-join"));

exports.onCreateNode = ({
  node,
  actions
}, pluginOptions) => {
  const {
    createNodeField
  } = actions;
  const {
    github,
    branch,
    basedir
  } = pluginOptions;

  if (node.internal.type === `MarkdownRemark`) {
    if (node.fileAbsolutePath != null) {
      const relativePath = `${node.fileAbsolutePath}`.replace(basedir + "/", "");
      const imagesFolderPath = `${relativePath}`.replace("pages", "images").replace(".md", "");
      createNodeField({
        node,
        name: 'editLink',
        value: (0, _urlJoin.default)(github, `edit`, branch, relativePath)
      });
      createNodeField({
        node,
        name: 'deleteLink',
        value: (0, _urlJoin.default)(github, `delete`, branch, relativePath)
      });
      createNodeField({
        node,
        name: 'uploadImageLink',
        value: (0, _urlJoin.default)(github, `upload`, branch, imagesFolderPath)
      });
    }
  }
};
//# sourceMappingURL=gatsby-node.js.map