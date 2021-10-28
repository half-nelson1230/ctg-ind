const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(glb)$/i,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
      ],
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      allPrismicNittyGritty{
        nodes{
          id
          lang
          type
          url
          uid
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.handle}/`,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
    result.data.allPrismicNittyGritty.nodes.forEach((page) =>{
      createPage({
        path: page.url,
        component: path.resolve(`./src/templates/nitty.js`),
        context: {
          uid: page.uid
        },
      })
    })

  })
}
