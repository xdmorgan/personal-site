import React from 'react'
import { Link } from 'gatsby-theme-xdmorgan'
import cx from 'classnames'
import styles from './footer.module.scss'

const YEAR = new Date().getFullYear()
const GITHUB = '//github.com/xdmorgan'
const TWITTER = '//twitter.com/xdanmorgan'
const LINKEDIN = '//linkedin.com/in/xdmorgan'

export function Footer() {
  return (
    <footer
      className={cx(
        styles.footer,
        'bg-big-stone',
        'c-white',
        'py-4x',
        'md:pt-8x',
        'md:pb-10x'
      )}
    >
      <div className="container">
        <div className={styles.grid}>
          <h2
            className={cx(
              styles.grid__heading,
              'h3',
              'mt-0',
              'mb-4x',
              'md:mb-0'
            )}
          >
            Thanks for stopping by.
          </h2>
          <ul
            className={cx(
              styles.links,
              styles.grid__links,
              'list-reset',
              'mt-0',
              'mb-8x',
              'md:mb-0',
              'md:align-r'
            )}
          >
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Contact</NavLink>
            <NavLink to={GITHUB}>GitHub</NavLink>
            <NavLink to={TWITTER}>Twitter</NavLink>
            <NavLink to={LINKEDIN}>Linked In</NavLink>
            <NavLink to="/">RSS</NavLink>
            <NavLink to="/">Uses</NavLink>
            <NavLink to="/styleguide">Styleguide</NavLink>
          </ul>
          <p
            className={cx(
              styles.grid__colophon,
              'c-mystic',
              'mt-0',
              'mb-1x',
              'md:mt-12x'
            )}
          >
            <> Built with </>
            <ColophonLink to="//gatsbyjs.org">Gatsby</ColophonLink>
            <> and </>
            <ColophonLink to="//www.npmjs.com/package/@skeletor/css">
              Skeletor
            </ColophonLink>
            <>, hosted on </>
            <ColophonLink to="//netlify.com">Netlify</ColophonLink>
            <>, source on </>
            <ColophonLink to="//github.com/xdmorgan/personal-site">
              GitHub
            </ColophonLink>
            <> ❤️</>
          </p>
          <p className={cx(styles.grid__legal, 'my-0')}>
            All rights reserved, {YEAR}.
          </p>
        </div>
      </div>
    </footer>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
      <Link to={to} className="stealth">
        {children}
      </Link>
    </li>
  )
}

function ColophonLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <span className="c-white">
      <Link className={cx('fw-bold', 'stealth', 'c-white')} to={to}>
        {children}
      </Link>
    </span>
  )
}
