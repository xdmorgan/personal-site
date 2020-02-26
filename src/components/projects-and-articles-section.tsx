import React from 'react'
import cx from 'classnames'
import Image from 'gatsby-image'
import { Link } from 'gatsby-theme-xdmorgan'
import styles from './projects-and-articles-section.module.scss'

export function ProjectsAndArticlesSection({ ...articlesProps }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <ProjectsSection />
          <ArticlesSection {...articlesProps} />
        </div>
      </div>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section className={cx(styles.grid__projects, 'py-8x md:py-12x lg:py-16x')}>
      <div className="lg:py-4x">
        <header className="child-my-0">
          <h2 className="h2">Projects &amp; Experiments</h2>
        </header>
        <div className="child-my-0 my-4x md:my-8x">
          <ul className={cx(styles.projects, 'list-reset')}>
            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="http://yasly.com/work/hotpoints/"
                >
                  Hotpoints App
                </Link>
              )}
            >
              Create custom interaction flows to facilitate product demos in
              commercial video shoots
            </Project>

            <Project
              heading={() => (
                <Link className="no-underline" to="https://gifn.it">
                  Gifn Photobooth App
                </Link>
              )}
            >
              Worked on the native Swift iOS application for the gif-generating
              photobooth start-up
            </Project>

            <Project
              heading={() => (
                <Link className="no-underline" to="https://designerfund.com">
                  Designer Fund
                </Link>
              )}
            >
              Replatformed from two WordPress sites to a single JAMStack site
              using Gatsby, Netlify, and Contentful
            </Project>

            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="https://github.com/xdmorgan/contentful-preview-next"
                >
                  Contentful Live Preview
                </Link>
              )}
            >
              Now.sh and Next.js project to live-preview markdown blog posts
              using the Contentful Preview API
            </Project>

            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="https://purplerockscissors.com/work/powerpuff-girls"
                >
                  Powerpuff Yourself
                </Link>
              )}
            >
              Node.js AWS Lambda services to generate gifs based on the Vue
              client application's Powfactor quiz results
            </Project>

            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="https://github.com/xdmorgan/wordpress-to-contentful"
                >
                  Wordpress to Contentful
                </Link>
              )}
            >
              Node.js CLI to manage the automated migration between the two
              platforms using their respective content APIs
            </Project>

            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="https://designerfund.com/business-impact"
                >
                  Automate the Boring Stuff with Python
                </Link>
              )}
            >
              Collection of solutions to exercises from the second edition of
              the popular{' '}
              <Link to="https://automatetheboringstuff.com/">Python book</Link>.
            </Project>

            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="https://github.com/xdmorgan/netlify-functions"
                >
                  Netlify Functions
                </Link>
              )}
            >
              Collection of misc. Lambda functions. Instantly use with Netlify
              and compatible with comparable services on AWS, GCP, etc.
            </Project>

            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="https://github.com/xdmorgan/skeletor"
                >
                  Skeletor CSS Framework
                </Link>
              )}
            >
              Spacing, typography, and color utility generator for rapid
              prototyping and design systems.{' '}
              <Link to="https://www.npmjs.com/package/@skeletor/css">
                Available on NPM
              </Link>
              .
            </Project>

            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="https://github.com/xdmorgan/gatsby-theme-xdmorgan"
                >
                  gatsby-theme-xdmorgan
                </Link>
              )}
            >
              Pre-configured TypeScript, Sass, MDX, SEO, Local Files, Google
              Fonts, and Google Analytics.{' '}
              <Link to="https://www.npmjs.com/package/gatsby-theme-xdmorgan">
                Available on NPM
              </Link>
              .
            </Project>
          </ul>
        </div>
        <footer className="child-my-0">
          <p>
            For more, see my profiles on{' '}
            <Link to="https://github.com/xdmorgan">GitHub</Link>,{' '}
            <Link to="https://www.codewars.com/users/xdmorgan">Codewars</Link>,{' '}
            and <Link to="https://codepen.io/xdmorgan">CodePen</Link>
          </p>
        </footer>
      </div>
    </section>
  )
}

function Project({
  children,
  className = undefined,
  heading = () => null,
  ...props
}: {
  children: React.ReactNode
  className?: string
  heading?: () => React.ReactNode
  [props: string]: any
}) {
  return (
    <li
      {...props}
      className={cx(styles.item, 'child-my-0 lg:pr-2x xl:pr-8x', className)}
    >
      <h3 className="h4 mb-1x">{heading()}</h3>
      <p className="m-0">{children}</p>
    </li>
  )
}

function ArticlesSection(props) {
  return (
    <div
      className={cx(
        styles.grid__articles,
        styles.articles,
        'pt-4x pb-8x md:py-12x md:pl-4x lg:py-16x lg:pl-8x'
      )}
    >
      <aside className={styles.articles__featured}>
        <header className="child-my-0 lg:mt-4x">
          <h2 className="h6">Featured Post</h2>
        </header>
        <Image
          className="w-fill mt-3x mb-2x md:mt-4x md:mb-3x"
          fluid={props.featuredPostImageSrc.fluid}
          alt={props.featurePostImageAlt}
        />
        <Link
          className="h2 d-block no-underline my-2x"
          to={props.featuredPostURL}
        >
          {props.featuredPostTitle}
        </Link>
        <p className="small m-0">{props.featuredPostExcerpt}</p>
      </aside>
      <section
        className={cx(styles.articles__recent, {
          'd-none': !props.recentPosts.length,
        })}
      >
        <header className="child-my-0 mb-3x md:mb-4x">
          <h2 className="h2">Articles &amp; Tutorials</h2>
        </header>
        <ul className="list-reset mb-4x md:mb-8x">
          {props.recentPosts.map(recentPost => (
            <li key={recentPost.title} className="mb-2x md:mb-3x">
              <Link className="h4 no-underline" to={recentPost.url}>
                {recentPost.title}
              </Link>
            </li>
          ))}
        </ul>
        <footer className="child-my-0">
          <p>
            <>See here for a </>
            <Link to="/">full list of posts</Link>
          </p>
        </footer>
      </section>
    </div>
  )
}
