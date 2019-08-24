import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { CodeBlock } from '../components/code-block'
import { SEO } from '../components/seo'

export default function Template({ data }) {
  const {
    body,
    excerpt,
    timeToRead,
    frontmatter: { title, image, date, tags },
  } = data.post
  const { organization } = data.site.siteMetadata
  console.log(data)
  return (
    <div className="container">
      <SEO
        schema={true}
        image={image.childImageSharp.fluid.src}
        title={title}
        description={excerpt}
        blogPost={{
          author: organization,
          datePublished: date,
        }}
      />
      <div
        className="wysiwyg child-my-0"
        style={{
          paddingTop: 'var(--space-10)',
          paddingBottom: 'var(--space-10)',
        }}
      >
        <Image fluid={image.childImageSharp.fluid} alt={title} />
        <h1>{title}</h1>
        <p>
          {tags} • {timeToRead}
        </p>
        <MDXProvider
          components={{
            pre: props => {
              const langClass = props.children.props.className || ''
              const matches = langClass.match(/language-(?<lang>.*)/)
              const language =
                matches && matches.groups && matches.groups.lang
                  ? matches.groups.lang
                  : ''
              const code = props.children.props.children.trim()
              return <CodeBlock code={code} language={language} />
            },
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </div>
  )
}

export const query = graphql`
  query PostPage($id: String!) {
    site {
      ...SiteMetaFields
    }
    post: mdx(id: { eq: $id }) {
      body
      excerpt
      timeToRead
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date(formatString: "MMMM D, YYYY")
        tags
      }
      fields {
        slug
      }
    }
  }
`
