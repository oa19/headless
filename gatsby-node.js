const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
const Promise = require('bluebird')
const path = require('path')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
    return new Promise((resolve, reject) => {
    const carModels = path.resolve('./src/templates/model.js')
    resolve(
      graphql(
        `
          {
            allContentfulCarModels {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulCarModels.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/models/${post.node.slug}/`,
            component: carModels,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
