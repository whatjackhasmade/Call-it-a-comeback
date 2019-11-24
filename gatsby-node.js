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
