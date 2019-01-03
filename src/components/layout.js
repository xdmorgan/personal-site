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
          meta={[
            {
              name: 'description',
              content:
                'Portfolio of Dan Morgan. UI Engineer in Washington, D.C.',
            },
            {
              name: 'keywords',
              content: 'Dan Morgan, Daniel Morgan, Danny Morgan, dannydev',
            },
          ]}
        >
          <html lang="en" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
          />
        </Helmet>
        {children}
      </>
    )}
  />
)
