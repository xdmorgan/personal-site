import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { SEO } from '../components/seo'
import Header from '../components/header'

import '../styles/theme.css'
import '../styles/space.css'
import '../styles/base-layout.css'
import '../styles/typography.css'
import '../styles/wysiwyg.css'
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
        <SEO
          title="Dan Morgan // Senior Engineer"
          description="Senior Engineer at Huge. Prev: Cvent, PRPL, Gifn, X Studios"
        />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <main>{children}</main>
      </div>
    )}
  />
)

export default Layout
