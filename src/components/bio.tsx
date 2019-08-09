import React from 'react'
import styles from './bio.module.css'
import cx from 'classnames'

export function Bio() {
  return (
    <section className={cx(styles.section, 'wysiwyg')}>
      <h1>Dan Morgan</h1>
      <p>
        I help companies craft scalable and accessible user interfaces for web
        and mobile. In my 8 years of experience, I've worked with companies
        large and small to implement product design systems, extensible
        component architectures, award-winning marketing websites, and native
        mobile applications.
      </p>
      <p>
        Currently, I work as a Senior Web Engineer at{' '}
        <a target="_blank" rel="noopener" href="https://hugeinc.com">
          Huge
        </a>{' '}
        in Washington D.C. Previously, Senior UI Developer at&nbsp;
        <a href="https://cvent.com/">Cvent</a>, Full-stack Developer at&nbsp;
        <a href="https://prpl.rs/">PRPL</a>, Application Developer at&nbsp;
        <a href="https://gifn.it/">Gifn</a> and UI Designer at&nbsp;
        <a href="https://xstudios.agency/">X Studios</a>.
      </p>
      <hr />
      <h2>Links</h2>
    </section>
  )
}

export default Bio
