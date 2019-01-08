import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const IndexPage = ({ data: { prismicHome } }) => {
  const {
    data: { emoji, lede, summary, title },
  } = prismicHome
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

export const pageQuery = graphql`
  query {
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

export default IndexPage
