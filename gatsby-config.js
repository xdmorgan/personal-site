require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
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
  plugins: [
    /**
     * Typescript
     * ------------------------------------------------------------------------
     */
    `gatsby-plugin-typescript`,
    /**
     * Gatsby v1-style layouts
     * ------------------------------------------------------------------------
     */
    `gatsby-plugin-layout`,
    /**
     * Sources
     * ------------------------------------------------------------------------
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `dannycodes`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    /**
     * Images
     * ------------------------------------------------------------------------
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /**
     * Styling
     * ------------------------------------------------------------------------
     */
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // postCssPlugins: [require('stylelint')],
      },
    }, // global
    {
      resolve: `gatsby-plugin-styled-components`, // components
      options: {}, // Add any options here
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['IBM Plex Sans:400,700', 'Montserrat:700'],
      },
    },
    /**
     * SEO
     * ------------------------------------------------------------------------
     */
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.UA_TRACKING_ID],
      },
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
      },
    },
    /**
     * PWA
     * ------------------------------------------------------------------------
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.app/offline
     * ------------------------------------------------------------------------
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Morgan // UI Engineer`,
        short_name: `xdmorgan`,
        start_url: `/`,
        background_color: `#2b2b31`,
        theme_color: `#0068fa`,
        display: `minimal-ui`,
        icon: `src/images/avatar.png`,
      },
    },
    // ...(process.env.NODE_ENV !== 'development'
    //   ? ['gatsby-plugin-offline']
    //   : []),
  ],
}
