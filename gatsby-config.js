require('dotenv').config()

module.exports = {
  siteMetadata: {
    // used by gatsby-plugin-feed
    title: process.env.SITE_META_TITLE || '',
    // used by gatsby-plugin-feed
    description: process.env.SITE_META_DESCRIPTION || '',
    // used by post template and gatsby-plugin-sitemap
    url: process.env.SITE_META_URL || '',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-xdmorgan',
      options: {
        gtag: process.env.UA_TRACKING_ID,
        gfonts: ['Lora:400,700', 'Fira Code:400,700'],
        filesystem: [
          {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
          {
            name: `posts`,
            path: `${__dirname}/src/content/posts`,
          },
        ],
        manifest: {
          name: `Dan Morgan • Front End Engineer`,
          short_name: `Dan Morgan`,
          start_url: `/`,
          background_color: `#2b2b31`,
          theme_color: `#0068fa`,
          display: `minimal-ui`,
          icon: `src/images/avatar.png`,
        },
        seo: {
          // Base page title
          title: process.env.SITE_META_TITLE || '',
          // site meta description
          description: process.env.SITE_META_DESCRIPTION || '',
          // site meta keywords
          keywords: (process.env.SITE_META_KEYWORDS || '').split(', '),
          // site logo (meta json schema)
          logo: process.env.SITE_META_LOGO || '',
          // organization name (meta json schema)
          organization: process.env.SITE_META_ORGANIZATION || '',
          // Base page title
          title: process.env.SITE_META_TITLE || '',
          // twitter card user attribution
          twitter: process.env.SITE_META_TWITTER || '',
          // fkn base url
          url: process.env.SITE_META_URL || '',
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl: url
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.lede,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.route,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.route,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      html
                      fields { route }
                      frontmatter {
                        title
                        date
                        lede
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Dan Morgan • Blog Feed',
          },
        ],
      },
    },
  ],
}
