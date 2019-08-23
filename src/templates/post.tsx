import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import './post.css'

export default function Template({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.post
  return (
    <div>
      <div className="wysiwyg">
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
