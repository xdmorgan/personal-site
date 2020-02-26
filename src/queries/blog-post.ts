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
  fragment PostContent on Mdx {
    body
  }
`

export const featureImage = graphql`
  fragment PostFeatureImage on Mdx {
    frontmatter {
      image {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 75) {
            # ...GatsbyImageSharpFluid_withWebp
            src
          }
        }
      }
    }
  }
`

export const thumbnailImage = graphql`
  fragment PostThumbnailImage on Mdx {
    frontmatter {
      thumbnail: image {
        childImageSharp {
          fluid(maxWidth: 960, quality: 75) {
            # ...GatsbyImageSharpFluid_withWebp
            src
          }
        }
      }
    }
  }
`
