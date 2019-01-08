require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Dan Morgan // UI Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
    'gatsby-plugin-offline', // include after manifest!
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['IBM Plex Sans:400,700', 'Montserrat:700'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-12598665-5',
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `dannycodes`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
  ],
}
