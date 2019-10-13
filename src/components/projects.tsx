import React from 'react'
import cx from 'classnames'
import styles from './projects.module.css'
import { Section } from './section'
import { Link } from './link'

export function Projects() {
  return (
    <Section
      sidebar={() => (
        <div className="wysiwyg child-my-0">
          <h2 className="h3">Projects &amp; Experiments</h2>
        </div>
      )}
    >
      <div className="child-my-0 wysiwyg">
        <ul className={cx(styles.list, 'list-reset')}>
          <Item
            heading={() => (
              <Link to="https://designerfund.com">Designer Fund</Link>
            )}
          >
            <p className="p--small">
              Redesign and replatform; migrated to JAMStack via Gatsby, Netlify,
              and Contentful
            </p>
          </Item>

          <Item
            heading={() => (
              <Link to="http://yasly.com/work/hotpoints/">Hotpoints App</Link>
            )}
          >
            <p className="p--small">
              Create custom interaction flows to facilitate product demos in
              commercial video shoots
            </p>
          </Item>

          <Item
            heading={() => (
              <Link to="https://gifn.it">Gifn Photobooth App</Link>
            )}
          >
            <p className="p--small">
              Worked on the Swift native iOS application rewrite (previously
              PWA) for the gif-generating event photo booth start-up.
            </p>
          </Item>

          <Item
            heading={() => (
              <Link to="https://designerfund.com/business-impact">
                Design for Business Impact
              </Link>
            )}
          >
            <p className="p--small">
              Gatsby, Netlify, and Contentful for the Designer Fund.
              Authentication using a custom Mailchimp integration
            </p>
          </Item>

          <Item
            heading={() => (
              <Link to="https://github.com/xdmorgan/contentful-preview-next">
                Contentful Live Preview
              </Link>
            )}
          >
            <p className="p--small">
              Now.sh and Next.js project to live-preview blog posts using the
              Contentful Preview API
            </p>
          </Item>

          <Item
            heading={() => (
              <Link to="https://purplerockscissors.com/work/powerpuff-girls">
                Powerpuff Yourself
              </Link>
            )}
          >
            <p className="p--small">
              Wrote the Node AWS Lambda services to generate gifs from the Vue
              application's Powfactor quiz
            </p>
          </Item>

          <Item
            heading={() => (
              <Link to="https://github.com/xdmorgan/wordpress-to-contentful">
                Wordpress to Contentful
              </Link>
            )}
          >
            <p className="p--small">
              Node.js CLI to manage the automated migration between the two
              platforms using their respective content APIs
            </p>
          </Item>

          <Item
            heading={() => (
              <Link to="https://github.com/xdmorgan/netlify-functions">
                Netlify Functions
              </Link>
            )}
          >
            <p className="p--small">
              Collection of open-source Lambda functions written for personal
              Netlify projects but applicable to any Lambda environment
            </p>
          </Item>

          <Item
            heading={() => (
              <Link to="https://github.com/xdmorgan/skeletor">
                Skeletor CSS Framework
              </Link>
            )}
          >
            <p className="p--small">
              Spacing, typography, and color utility generator for rapid
              prototyping and design systems
            </p>
          </Item>

          <Item
            heading={() => (
              <Link to="https://github.com/xdmorgan/gatsby-starter">
                Gatsby v2 Starter Project
              </Link>
            )}
          >
            <p className="p--small">
              TypeScript, PostCSS, Styled Components, Jest, MDX, CircleCI,
              Netlify, Prettier, Stylelint, and dotenv
            </p>
          </Item>

          {/* Make an 'other project' also pull some public gists and codepens
          
          <Item
            heading={() => (
              <Link to="https://gist.github.com/xdmorgan/b94de9123503b86de13d02a2f00c734a">
                useTracking React Hook
              </Link>
            )}
          >
            <p className="p--small">
              Custom React Hook to generate static or dynamic event tracking
              callbacks for performant and declarative analytics
            </p>
          </Item> */}
        </ul>
      </div>
    </Section>
  )
}

function Item({
  children,
  className = undefined,
  heading = () => null,
  ...props
}: {
  children: React.ReactNode
  className?: string
  heading?: () => React.ReactNode
}) {
  return (
    <li {...props} className={cx(styles.item, 'child-my-0', className)}>
      <h3 className="h4">{heading()}</h3>
      {children}
    </li>
  )
}
