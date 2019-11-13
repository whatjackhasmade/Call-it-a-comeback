const config = require(`./site-config`)

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`

console.log(`Using environment config: "${activeEnv}"`)

require(`dotenv`).config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  plugins: [
    // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WORDPRESS",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wordpress",
        // Url to query from
        url: "http://wjhm.test/graphql",
        // refetch interval in seconds
        refetchInterval: 60,
      },
    },
    `gatsby-source-bonus`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: `1261093`,
        sv: `6`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeLinkHeaders: false,
        mergeCachingHeaders: false,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.whatjackhasmade.co.uk`,
        sitemap: `https://www.whatjackhasmade.co.uk/sitemap.xml`,
        resolveEnv: () => activeEnv,
        env: {
          development: {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
          },
          production: {
            policy: [
              {
                userAgent: `*`,
                allow: `/`,
                disallow: [`/inspiration`, `/assets`, `/client/*`, `/twitter`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [
          `Array.prototype.map`,
          `fetch`,
          `IntersectionObserver`,
          `IntersectionObserverEntry`,
        ],
      },
    },
  ],
}
