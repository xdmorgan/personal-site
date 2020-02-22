import React from 'react'
import { Link } from 'gatsby-theme-xdmorgan'
import styles from './footer.module.css'

const y = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="wysiwyg text-center child-my-0">
          <p className="p--small">
            Built with <Link to="//gatsbyjs.org">Gatsby</Link>, hosted on{' '}
            <Link to="//netlify.com">Netlify</Link>, source on{' '}
            <Link to="//github.com/xdmorgan/personal-site">GitHub</Link> ❤️ All
            rights reserved, {y}.
          </p>
          {/* <p className="p--small">
            For more information, see <Link to="/colophon">this article</Link>{' '}
            about how I built it.
          </p> */}
        </div>
        <div className={styles.links}>
          <ul className="list-reset child-my-0">
            <li>
              <Link to="//github.com/xdmorgan">
                GitHub
                <span aria-hidden> 👉</span>
              </Link>
            </li>
            <li>
              <Link to="//linkedin.com/in/xdmorgan">
                LinkedIn <span aria-hidden> 👉</span>
              </Link>
            </li>
            <li>
              <Link to="mailto:hello@danny.codes">
                Contact <span aria-hidden> 👉</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
