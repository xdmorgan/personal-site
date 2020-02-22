import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { CodeBlock } from '../components/code-block'
import { SEO } from 'gatsby-theme-xdmorgan'
import { Link } from 'gatsby-theme-xdmorgan'

export default function Template({ data }) {
  const {
    body,
    excerpt,
    timeToRead,
    fields: { slug },
    frontmatter: { title, image, date, tags },
  } = data.post
  return (
    <div className="container">
      <SEO
        schema={true}
        image={image.childImageSharp.fluid.src}
        title={title}
        description={excerpt}
        blogPost={{
          author: '@xdanmorgan',
          datePublished: date,
        }}
      />
      <div
        className="wysiwyg child-my-0"
        style={{
          marginTop: 'var(--space-10)',
          marginBottom: 'var(--space-5)',
        }}
      >
        <Image fluid={image.childImageSharp.fluid} alt={title} />
        <h1>{title}</h1>
        <p>
          {tags} • {timeToRead} minute read
        </p>
      </div>
      <div
        className="wysiwyg wysiwyg--lede child-my-0"
        style={{
          marginTop: 'var(--space-5)',
          marginBottom: 'var(--space-10)',
        }}
      >
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
              // return <CodeBlock code={code} language={language} />
              return (
                <pre>
                  <code>{code}</code>
                </pre>
              )
            },
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <hr />
        <h2>Want to Leave a Comment?</h2>
        <p>
          If you have questions, feedback, or found an issue, I would love to
          hear from you.{' '}
          <Link
            to={`https://github.com/xdmorgan/personal-site/tree/master/src/content/posts/${slug}.mdx`}
            target="_blank"
          >
            See here
          </Link>{' '}
          to create a pull request or view the source for this post on GitHub.
          Thanks for reading!
        </p>
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
