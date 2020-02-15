require('dotenv').config();

module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: 'gatsby-theme-xdmorgan',
      options: {
        gtag: process.env.UA_TRACKING_ID,
        gfonts: ['IBM Plex Sans:400,700', 'Montserrat:700'],
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
          name: `Dan Morgan // UI Engineer`,
          short_name: `Dan Morgan`,
          start_url: `/`,
          background_color: `#2b2b31`,
          theme_color: `#0068fa`,
          display: `minimal-ui`,
          icon: `src/images/avatar.png`,
        },
        seo: {
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
  ],
};
