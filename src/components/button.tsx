import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby-theme-xdmorgan'
import styles from './button.module.scss'

export function Button({
  fill = false,
  as = undefined,
  href = undefined,
  to = undefined,
  className = undefined,
  ...props
}: {
  children: React.ReactNode
  fill?: boolean
  as?: string
  href?: string
  to?: string
  className?: string
  [props: string]: any
}) {
  const Element = as || (href || to ? Link : 'button')
  return (
    <Element
      {...props}
      to={to}
      href={href}
      {...(Element === 'button' ? { type: 'button' } : {})}
      className={cx(styles.button, { [styles.fill]: !!fill }, className)}
    />
  )
}
