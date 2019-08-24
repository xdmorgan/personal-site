import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function Template({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.post
  return (
    <div className="container">
      <div
        className="wysiwyg child-my-0"
        style={{
          paddingTop: 'var(--space-10)',
          paddingBottom: 'var(--space-10)',
        }}
      >
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
  )
}

export const query = graphql`
  query PostPage($id: String!) {
    post: mdx(id: { eq: $id }) {
      body
      excerpt
      timeToRead
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
