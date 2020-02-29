import React from 'react'
import { graphql } from 'gatsby'
import cx from 'classnames'
import Image from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SEO, Link } from 'gatsby-theme-xdmorgan'

import { CodeBlock } from '../components'
import styles from './post.module.scss'

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
        className="bg-shark pt-16x pb-8x md:py-16x c-white"
        style={{ backgroundColor: theme.header }}
      >
        <div className="container">
          <div className={cx(styles.header, 'child-my-0 lg:pt-10x lg:pb-8x')}>
            <h1 className="h1--xxl mb-4x md:mb-8x">{title}</h1>
            <ul
              className="list-reset mt-0 mb-2x lg:mt-2x lg:mb-0 lg:align-r d-flex lg:d-block"
              style={{ flexWrap: 'wrap' }}
            >
              <li className="child-my-0 mb-2x pr-3x sm:pr-4x lg:pr-0 flx-s-0">
                <span className="d-block c-mystic">Published</span>
                <span className="d-block h5 mt-1x">{date}</span>
              </li>
              <li className="child-my-0 mb-2x pr-3x sm:pr-4x lg:pr-0 flx-s-0">
                <span className="d-block c-mystic">Length</span>
                <span className="d-block h5 mt-1x">
                  {timeToRead} Minute{timeToRead > 1 ? 's' : ''}
                </span>
              </li>
              <li className="child-my-0 mb-2x pr-3x sm:pr-4x lg:pr-0 flx-s-0">
                <span className="d-block c-mystic">Category</span>
                <span className="d-block h5 mt-1x">{category}</span>
              </li>
            </ul>
            <p className="m-0 lede c-alabaster">{lede}</p>
          </div>
        </div>
      </header>
      <figure className="mt-0 mx-0 mb-4x md:mb-10x lg:mb-12x">
        <div className="container">
          <div className={styles.hero}>
            <Image fluid={image.full.childImageSharp.fluid} alt={image.alt} />
          </div>
        </div>
        <figcaption className="container lg:align-r pt-2x lg:pt-3x c-abbey">
          <Link className="stealth" to={image.attribution.link}>
            {image.attribution.text}
          </Link>
        </figcaption>
      </figure>
      <div className="container wysiwyg child-my-0" style={{ maxWidth: 1024 }}>
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
        {/* <p>
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
        </p> */}
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
