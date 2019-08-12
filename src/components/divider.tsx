import React from 'react'
import cx from 'classnames'
import styles from './divider.module.css'

interface Props {
  /** Enforce standard max width */
  maxWidth?: boolean
  /** Disable standard margins */
  margin?: boolean
  /** Fit to surroundings (currentColor vs theme accent) */
  incognito?: boolean
  /** Custom class */
  className?: string
}

export function Divider({
  maxWidth = false,
  margin = true,
  incognito = false,
  className = undefined,
  ...props
}: Props) {
  return (
    <hr
      {...props}
      className={cx(
        styles.divider,
        {
          [styles.incognito]: incognito,
          [styles.maxWidth]: maxWidth,
          [styles.margin]: margin,
        },
        className
      )}
    />
  )
}
