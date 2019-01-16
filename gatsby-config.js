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
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains.
        name: 'pages',

        // GraphQL query used to fetch all data for the search index.
        query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    tags
                    title
                  }
                  rawMarkdownBody
                }
              }
            }
          }
        `,

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        store: ['id', 'tags', 'title'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index.
        normalizer: ({ data }) =>
          data.allMarkdownRemark.edges.map(({ node }) => ({
            id: node.id,
            path: node.frontmatter.path,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
          })),
      },
    },
  ]
};
