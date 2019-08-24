import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { SEO } from '../components/seo'
import { Footer } from '../components/footer'
// import Header from '../components/header'

import '../styles/theme.css'
import '../styles/space.css'
import '../styles/base-layout.css'
import '../styles/typography.css'
import '../styles/utilities.css'
import '../styles/wysiwyg.css'
import '../styles/button.css'
import '../styles/container.css'
// import '../styles/prism.css'

import styles from './layout.module.css'

const layoutQuery = graphql`
  query SiteLayoutQuery {
    site {
      ...SiteMetaFields
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={layoutQuery}
    render={data => (
      <div className={styles.layout}>
        <SEO />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <main>
          {children}

          <Footer />
        </main>
      </div>
    )}
  />
)

export default Layout
