import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby-theme-xdmorgan'
import styles from './header.module.scss'

export function Header({
  inline = false,
  textColor = null,
}: {
  inline?: boolean
  textColor?: string
}) {
  return (
    <header
      className={cx('py-3x w-fill z-nav', {
        [styles.absolute]: !inline,
        [`c-${textColor}`]: !!textColor,
      })}
    >
      <div className="container">
        <nav className={cx(styles.nav, 'd-flex flx-a-c position-relative')}>
          <div className="flx-g-0">
            <Link className="stealth fw-bold h3 d-block sm:p-1x lg:p-2x" to="/">
              Dan M.
            </Link>
            <Link to="#content" className={cx(styles.nav__skip, 'sr-focus')}>
              Skip to content
            </Link>
          </div>
          <ul
            className={cx(
              styles.nav__links,
              'm-0 list-reset d-flex flx-g-1 flx-a-c flx-j-fe child-mx-0'
            )}
          >
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#projects">Work</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li className={cx('mr-1x')}>
      <Link to={to} className="stealth fw-bold d-block h6 sm:p-1x lg:p-2x">
        {children}
      </Link>
    </li>
  )
}
