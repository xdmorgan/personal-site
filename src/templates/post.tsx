import React from 'react'
import { graphql } from 'gatsby'
import cx from 'classnames'
import Image from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SEO, Link } from 'gatsby-theme-xdmorgan'

import { CodeBlock } from '../components'
import styles from './post.module.scss'

export default function Template({ data: { post, avatar } }) {
  console.log(avatar)
  const {
    body,
    excerpt,
    timeToRead,
    tableOfContents,
    fields: { slug },
    frontmatter: { title, image, date, category, theme },
  } = post
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
        <figcaption className="container lg:align-r pt-2x lg:pt-3x c-abbey caption">
          <Link className="stealth" to={image.attribution.link}>
            {image.attribution.text}
          </Link>
        </figcaption>
      </figure>
      <div className={'container child-my-0 pb-8x md:pb-10x lg:pb-12x'}>
        <div className={styles.main}>
          <div
            className={cx(styles.main__sidebar, 'd-none lg:d-flex lg:flx-d-c')}
          >
            <div className="flx-g-0 p-3x pt-0 md:p-4x md:pt-0 bg-spring-wood">
              <div
                className="rc-normal position-relative mb-3x"
                style={{ overflow: 'hidden', marginTop: 8 * -3, width: 74 }}
              >
                <Image
                  fluid={avatar.childImageSharp.fluid}
                  alt="Dan in silhouette"
                />
              </div>
              <h2 className="h5 mt-0 mb-2x md:mb-2x md:pb-05x">
                About the Author
              </h2>
              <p className="caption m-0">
                Dan Morgan is a Front End Engineer at Wayfair based in
                Washington D.C. Previously: Huge, Cvent, Gifn and PRPL.
              </p>
            </div>
            <div className={cx(styles.toc, 'flx-g-1')}>
              <div className="p-3x md:px-4x md:py-6x">
                <h2 className="h5 mt-0 mb-2x md:mb-2x md:pb-05x">
                  Table of Contents
                </h2>
                <ul className="list-reset p-0 m-0">
                  {tableOfContents.items.map((heading, idx) => (
                    <li key={heading.url}>
                      <Link
                        className={cx(
                          'stealth caption d-block position-relative',
                          { 'is-active': false }
                        )}
                        to={heading.url}
                      >
                        {heading.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              style={{ borderTop: '1px solid var(--color-mystic)' }}
              className="flx-g-0 p-3x md:px-4x md:py-6x"
            >
              <h2 className="h5 mt-0 mb-2x md:mb-2x md:pb-05x">
                Questions &amp; Comments
              </h2>
              <p className="caption m-0">
                <>If you have feedback, </>
                <Link
                  to={`https://github.com/xdmorgan/personal-site/tree/master/src/content/posts/${slug}.mdx`}
                  target="_blank"
                >
                  view this post on GitHub
                </Link>
                <> </>
                <>
                  and create an issue or open a pull request with edits. Thanks
                  for reading!
                </>
              </p>
            </div>
          </div>
          <div
            className={cx(
              styles.main__content,
              'wysiwyg wysiwyg--post child-my-0'
            )}
          >
            <MDXProvider
              components={{
                highlight: ({ className, ...props }) => (
                  <div
                    className={cx(
                      'bg-spring-wood p-3x md:p-4x child-my-0',
                      className
                    )}
                    {...props}
                  />
                ),
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
      </div>
    </article>
  )
}

export const query = graphql`
  query PostPage($id: String!) {
    avatar: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 148, quality: 50) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    post: mdx(id: { eq: $id }) {
      ...PostMetaFields
      ...PostFeatureImage
      ...PostBodyContent
    }
  }
`
