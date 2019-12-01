/* --------- Programatically Create Image Nodes --------- */

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WORDPRESS_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.mediaItemUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

/* --------- Programatically Create Pages --------- */

const createCases = require(`./node/createCases`)
const createPages = require(`./node/createPages`)
const createPosts = require(`./node/createPosts`)
const createSerieses = require(`./node/createSerieses`)

exports.createPages = async ({ actions, graphql }) => {
  await createCases({ actions, graphql })
  await createPages({ actions, graphql })
  await createPosts({ actions, graphql })
  await createSerieses({ actions, graphql })
}

/* --------- MailtoUI Plugin --------- */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mailtoui/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
