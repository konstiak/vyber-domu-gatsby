import urljoin from 'url-join';

exports.onCreateNode = ({ node, actions }, pluginOptions) => {
  const { createNodeField } = actions
  const { github, branch, basedir } = pluginOptions

  if (node.internal.type === `MarkdownRemark`) {
    if (node.fileAbsolutePath != null) {
      const relativePath = `${node.fileAbsolutePath}`.replace(basedir + "/", "")
      const imagesFolderPath = `${relativePath}`.replace("pages", "images").replace(".md", "")
  
      createNodeField({
        node,
        name: 'editLink',
        value: urljoin(github, `edit`, branch, relativePath)
      });
  
      createNodeField({
        node,
        name: 'deleteLink',
        value: urljoin(github, `delete`, branch, relativePath)
      });

      createNodeField({
        node,
        name: 'uploadImageLink',
        value: urljoin(github, `upload`, branch, imagesFolderPath)
      });
    }
  }
}