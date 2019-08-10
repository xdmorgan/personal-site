import React from 'react'
import cx from 'classnames'
import styles from './section.module.css'

interface Props {
  sidebar: () => React.ReactNode
  children: React.ReactNode
}

export function Section({ sidebar = () => null, children }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.sidebar}>{sidebar()}</div>
      <div className={cx(styles.content, styles.contentMax)}>{children}</div>
    </section>
  )
}

export default Section
