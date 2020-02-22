import React from 'react'
import { SEO } from 'gatsby-theme-xdmorgan'
import { Footer } from '../components/footer'

import '../styles/skeletor/skeletor.css'
import '../styles/main.scss'

import styles from './layout.module.scss'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <SEO />
    <main>
      {children}

      <Footer />
    </main>
  </div>
)

export default Layout
