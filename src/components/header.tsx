import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby-theme-xdmorgan'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={cx('pt-4x', 'pb-3x', 'bg-panache')}>
      <div className="container">
        <nav className="d-flex">
          <div className="flx-0">
            <Link className="stealth fw-bold h3" to="/">
              Dan M.
            </Link>
            <Link to="#content" className={cx(styles.header__skip, 'sr-focus')}>
              Skip to content
            </Link>
          </div>
          <ul
            className={cx(
              styles.header__links,
              'm-0',
              'list-reset',
              'd-flex',
              'flx-1',
              'flx-a-c',
              'flx-j-fe',
              'child-mx-0'
            )}
          >
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Articles</NavLink>
            <NavLink to="/">Contact</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li className={cx('mr-1x')}>
      <Link to={to} className="stealth fw-bold d-block h6 sm:p-1x">
        {children}
      </Link>
    </li>
  )
}
