const remark = require("remark");
const visit = require("unist-util-visit");

module.exports = {
  siteMetadata: {
    title: `Handy Web Tools`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
          // Fields to index
          fields: [`title`, `tags`,`href`,`excerpt`,`id`],
          // How to resolve each field`s value for a supported node type
          resolvers: {
              // For any node of type MarkdownRemark, list how to resolve the fields` values
              MarkdownRemark: {
                title: node => node.frontmatter.title,
                tags: node => node.frontmatter.tags,
                href: node => node.frontmatter.href,
                excerpt: node => {
                  const excerptLength = 300 // Hard coded excerpt length
                  let excerpt = ''
                  const tree = remark().parse(node.rawMarkdownBody)
                  visit(tree, 'text', (node) => {
                    excerpt += node.value
                  })
                  return excerpt.slice(0, excerptLength)
                },
                id: node => node.id
              }
          }
      } 
    }
  ]
};
