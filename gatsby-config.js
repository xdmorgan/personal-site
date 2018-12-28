module.exports = {
  siteMetadata: {
    title: 'Dan Morgan // UI Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
  ],
}
