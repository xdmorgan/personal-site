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
    frontmatter: { title, image, date, category, theme },
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
        className="bg-shark pt-10x pb-4x md:py-12x lg:py-16x c-white"
        style={{ backgroundColor: theme.header }}
      >
        <div className="container">
          <h1 className="h1--xxl mb-4x md:mb-8x">{title}</h1>
          <ul
            className="list-reset mt-0 mb-2x md:mb-0 lg:align-r d-flex lg:d-block"
            style={{ flexWrap: 'wrap' }}
          >
            <li className="child-my-0 mb-2x pr-3x sm:pr-4x lg:pr-0 flx-s-0">
              <span className="d-block c-mystic">Published</span>
              <span className="d-block h5 mt-1x md:mt-2x">{date}</span>
            </li>
            <li className="child-my-0 mb-2x pr-3x sm:pr-4x lg:pr-0 flx-s-0">
              <span className="d-block c-mystic">Length</span>
              <span className="d-block h5 mt-1x md:mt-2x">
                {timeToRead} Minute{timeToRead > 1 ? 's' : ''}
              </span>
            </li>
            <li className="child-my-0 mb-2x pr-3x sm:pr-4x lg:pr-0 flx-s-0">
              <span className="d-block c-mystic">Category</span>
              <span className="d-block h5 mt-1x md:mt-2x">{category}</span>
            </li>
          </ul>
          <p className="m-0 lede c-alabaster">{lede}</p>
        </div>
      </header>
      <figure className="m-0">
        <Image fluid={image.full.childImageSharp.fluid} alt={image.alt} />
        <figcaption>{image.attribution}</figcaption>
      </figure>
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
