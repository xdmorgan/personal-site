import React from 'react'
import cx from 'classnames'
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
                <Link className="no-underline" to="https://designerfund.com">
                  Designer Fund
                </Link>
              )}
            >
              Redesign and replatform; migrated to JAMStack via Gatsby, Netlify,
              and Contentful
            </Project>

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
              Worked on the Swift native iOS application rewrite (previously
              PWA) for the gif-generating event photo booth start-up.
            </Project>

            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="https://designerfund.com/business-impact"
                >
                  Design for Business Impact
                </Link>
              )}
            >
              Gatsby, Netlify, and Contentful for the Designer Fund.
              Authentication using a custom Mailchimp integration
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
              Now.sh and Next.js project to live-preview blog posts using the
              Contentful Preview API
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
              Wrote the Node AWS Lambda services to generate gifs from the Vue
              application's Powfactor quiz
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
                  to="https://github.com/xdmorgan/netlify-functions"
                >
                  Netlify Functions
                </Link>
              )}
            >
              Collection of open-source Lambda functions written for personal
              Netlify projects but applicable to any Lambda environment
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
              prototyping and design systems
            </Project>

            <Project
              heading={() => (
                <Link
                  className="no-underline"
                  to="https://github.com/xdmorgan/gatsby-starter"
                >
                  Gatsby v2 Starter Project
                </Link>
              )}
            >
              TypeScript, PostCSS, Styled Components, Jest, MDX, CircleCI,
              Netlify, Prettier, Stylelint, and dotenv
            </Project>
          </ul>
        </div>
        <footer className="child-my-0">
          <p>
            For more project, check out my profiles on{' '}
            <Link to="//github.com/xdmorgan">GitHub</Link> and{' '}
            <Link to="//codepen.io/xdmorgan">CodePen</Link>
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
      className={cx(styles.item, 'child-my-0 lg:pr-2x xl:pr-4x', className)}
    >
      <h3 className="h4 mb-1x">{heading()}</h3>
      <p className="m-0">{children}</p>
    </li>
  )
}

function ArticlesSection(props) {
  console.log(props)
  return (
    <div
      className={cx(
        styles.grid__articles,
        styles.articles,
        'pt-4x pb-8x md:py-12x md:pl-4x lg:py-16x lg:pl-8x'
      )}
    >
      <aside className={styles.articles__featured}>
        <header className="child-my-0 lg:mt-4x lg:pt-2x">
          <h2 className="h6">Featured Post</h2>
        </header>
        <img
          className="w-fill mt-3x mb-2x md:mt-4x md:mb-3x"
          src="https://source.unsplash.com/random/1600x900"
          alt="Unsplash ranodm placeholder image"
        />
        <Link
          className="h3 d-block no-underline mb-2x"
          to={props.featuredPostURL}
        >
          {props.featuredPostTitle}
        </Link>
        <p className="small m-0">{props.featuredPostExcerpt}</p>
      </aside>
      <section className={styles.articles__recent}>
        <header className="child-my-0">
          <h2 className="h2">Articles &amp; Tutorials</h2>
        </header>
        <ul className="list-reset mb-4x md:mb-8x">
          <li className="mb-2x md:mb-3x">
            <Link className="h4 no-underline" to="/">
              Using Interest Groups With The Mailchimp V3 API
            </Link>
          </li>
          <li className="mb-2x md:mb-3x">
            <Link className="h4 no-underline" to="/">
              Gatsby Themes: Publish to NPM
            </Link>
          </li>
          <li className="mb-2x md:mb-3x">
            <Link className="h4 no-underline" to="/">
              Best of the week: February 22 2020
            </Link>
          </li>
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
