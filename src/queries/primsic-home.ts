import { graphql } from 'gatsby'

export interface SiteMeta {
  title: string
  description: string
  logo: string
  keywords: string[]
  organization: string
  twitter: string
  url: string
}

export const fragment = graphql`
  fragment PrismicHomeFields on PrismicHome {
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
`
