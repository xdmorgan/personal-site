import React from 'react'
import cx from 'classnames'
import styles from './footer.module.css'
import { Section } from './section'
import Link from './link'

const y = new Date().getFullYear()

export function Footer() {
  return (
    <Section>
      <div className={styles.content}>
        <div className="wysiwyg child-my-0">
          <p className="p--small">
            This site is built with <Link to="//gatsbyjs.org">Gatsby</Link>, the
            code is available on{' '}
            <Link to="//github.com/xdmorgan/personal-site">GitHub</Link>. For
            more information, see <Link to="/colophon">this article</Link> about
            how I built it.
          </p>
          <p
            className="p--small"
            style={{ color: 'var(--theme-foreground-2)' }}
          >
            All rights reserved. {y}
          </p>
        </div>
        <ul class={cx(styles.links, 'list-reset', 'child-my-0')}>
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
    </Section>
  )
}
