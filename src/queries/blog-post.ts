import { graphql } from 'gatsby'

export const metaFields = graphql`
  fragment PostMetaFields on Mdx {
    fields {
      slug
    }
    frontmatter {
      date(formatString: "MMMM D, YYYY")
      title
      tags
      category
      theme {
        header
      }
    }
    timeToRead
    excerpt(pruneLength: 140)
  }
`

export const content = graphql`
  fragment PostBodyContent on Mdx {
    tableOfContents
    body
  }
`

export const imageMeta = graphql`
  fragment PostImageMeta on Mdx {
    frontmatter {
      image {
        alt
        attribution {
          text
          link
        }
      }
    }
  }
`

export const featureImage = graphql`
  fragment PostFeatureImage on Mdx {
    ...PostImageMeta
    frontmatter {
      image {
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
    ...PostImageMeta
    frontmatter {
      image {
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
