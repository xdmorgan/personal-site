import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SEO, Link } from 'gatsby-theme-xdmorgan'

import { CodeBlock } from '../components'

export default function Template({ data }) {
  const {
    body,
    excerpt,
    timeToRead,
    fields: { slug },
    frontmatter: { title, image, date, tags, theme },
  } = data.post
  const lede =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in elementum risus, eget egestas nibh. Mauris eget ligula convallis lacus varius tristique. Maecenas lacus nisl, dapibus nec dapibus eu, fermentum in ligula.'
  return (
    <article>
      <SEO
        schema={true}
        image={image.full.childImageSharp.fluid.src}
        title={title}
        description={excerpt}
        blogPost={{
          author: '@xdanmorgan',
          datePublished: date,
        }}
      />
      <header
        className="bg-shark py-10x md:py-12x lg:py-16x c-white"
        style={{ backgroundColor: theme.header }}
      >
        <div className="container">
          <h1 className="h1--xxl mb-3x md:mb-4x lg:mb-8x">{title}</h1>
          <p className="lede c-alabaster">{lede}</p>
        </div>
      </header>
      <figure>
        <Image fluid={image.full.childImageSharp.fluid} alt={image.alt} />
        <figcaption>{image.attribution}</figcaption>
      </figure>

      <div className="wysiwyg child-my-0">
        <p>
          {tags} • {timeToRead} minute read
        </p>
      </div>
      <div className="container wysiwyg child-my-0">
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
    </article>
  )
}

export const query = graphql`
  query PostPage($id: String!) {
    post: mdx(id: { eq: $id }) {
      ...PostMetaFields
      ...PostFeatureImage
      ...PostBodyContent
    }
  }
`
