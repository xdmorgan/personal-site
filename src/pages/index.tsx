import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
// import { SEO } from '../components/seo'
import { SiteMeta } from '../queries/site-meta';

interface Props {
  data: {
    site: {
      siteMetadata: SiteMeta
    }
    prismicHome: any
  }
}

export default function Page({ data }: Props) {
  const {
    data: { emoji, lede, summary, title },
  } = data.prismicHome
  return (
    <Layout>
      <section className="Hero">
        <div className="Container">
          <h1>
            <span role="img" aria-label="Man using laptop">
              {emoji.text}
            </span>
          </h1>
          <h2>{title.text}</h2>
          <div dangerouslySetInnerHTML={{ __html: lede.html }} />
          <div dangerouslySetInnerHTML={{ __html: summary.html }} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    site {
      ...SiteMetaFields
    }
    prismicHome {
      id
      data {
        emoji {
          text
        }
        title {
          text
        }
        lede {
          html
        }
        summary {
          html
        }
      }
    }
  }
`
