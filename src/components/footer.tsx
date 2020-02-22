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
            <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
              <Link to="/" className={cx('stealth')}>
                About
              </Link>
            </li>
            <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
              <Link to="/" className={cx('stealth')}>
                Blog
              </Link>
            </li>
            <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
              <Link to="/" className={cx('stealth')}>
                Contact
              </Link>
            </li>
            <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
              <Link to={GITHUB} className={cx('stealth')}>
                GitHub
              </Link>
            </li>
            <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
              <Link to={TWITTER} className={cx('stealth')}>
                Twitter
              </Link>
            </li>
            <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
              <Link to={LINKEDIN} className={cx('stealth')}>
                LinkedIn
              </Link>
            </li>
            <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
              <Link to="/" className={cx('stealth')}>
                RSS
              </Link>
            </li>
            <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
              <Link to="/" className={cx('stealth')}>
                Uses
              </Link>
            </li>
            <li className={cx('mt-0', 'mb-1x', 'md:mb-2x')}>
              <Link to="/styleguide" className={cx('stealth')}>
                Styleguide
              </Link>
            </li>
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
            {' '}
            Built with{' '}
            <span className="c-white">
              <Link
                className={cx('fw-bold', 'stealth', 'c-white')}
                to="//gatsbyjs.org"
              >
                Gatsby
              </Link>
            </span>{' '}
            and{' '}
            <span className="c-white">
              <Link
                className={cx('fw-bold', 'stealth', 'c-white')}
                to="//www.npmjs.com/package/@skeletor/css"
              >
                Skeletor
              </Link>
            </span>
            , hosted on{' '}
            <span className="c-white">
              <Link
                className={cx('fw-bold', 'stealth', 'c-white')}
                to="//netlify.com"
              >
                Netlify
              </Link>
            </span>
            , source on{' '}
            <span className="c-white">
              <Link
                className={cx('fw-bold', 'stealth', 'c-white')}
                to="//github.com/xdmorgan/personal-site"
              >
                GitHub
              </Link>
            </span>{' '}
            ❤️
          </p>
          <p className={cx(styles.grid__legal, 'my-0')}>
            All rights reserved, {YEAR}.
          </p>
        </div>
      </div>
    </footer>
  )
}
