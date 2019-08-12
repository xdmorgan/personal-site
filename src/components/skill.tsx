import React from 'react'
import cx from 'classnames'
import styles from './skill.module.css'

export function Skill({ title, children }) {
  return (
    <div className="wysiwyg child-my-0">
      <h3 className="h5">{title}</h3>
      <p className="p--small">{children}</p>
    </div>
  )
}

function Grid({ children, className = undefined, ...props }) {
  return (
    <div {...props} className={cx(styles.grid, className)}>
      {children}
    </div>
  )
}

Skill.Grid = Grid

export default Skill
