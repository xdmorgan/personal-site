import { graphql } from 'gatsby'

export const metaFields = graphql`
  fragment PostMetaFields on Mdx {
    fields {
      slug
    }
    frontmatter {
      title
      tags
      date(formatString: "MMMM D, YYYY")
    }
    timeToRead
    excerpt(pruneLength: 140)
  }
`

export const content = graphql`
  fragment PostBodyContent on Mdx {
    body
  }
`

export const featureImage = graphql`
  fragment PostFeatureImage on Mdx {
    frontmatter {
      image {
        alt
        full: src {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export const thumbnailImage = graphql`
  fragment PostThumbnailImage on Mdx {
    frontmatter {
      image {
        alt
        thumbnail: src {
          childImageSharp {
            fluid(maxWidth: 960, quality: 50) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
