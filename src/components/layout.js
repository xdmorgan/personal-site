import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './site.scss'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang="en" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Portfolio of Dan Morgan. UI Engineer in Washington, D.C."
          />
          <meta
            name="keywords"
            content="Dan Morgan, Daniel Morgan, Danny Morgan, dannydev"
          />
        </Helmet>
        {children}
      </>
    )}
  />
)
