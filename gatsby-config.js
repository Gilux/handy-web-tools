const remark = require("remark");
const visit = require("unist-util-visit");

require("dotenv").config();

const myQuery = `{
  allMarkdownRemark {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          tags
          href
          thumbnail
        }
      }
    }
  }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allMarkdownRemark.edges.map(({ node }) => {
      node.title = node.frontmatter.title
      node.tags = node.frontmatter.tags.split(",")
      node.href = node.frontmatter.href
      node.thumbnail = node.frontmatter.thumbnail
      delete node.frontmatter
      return node
    }), // optional
    settings: {
      // optional, any index settings
    }
  }
];

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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000 // default: 1000
      }
    }
  ]
};




