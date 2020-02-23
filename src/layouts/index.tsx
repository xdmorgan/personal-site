import React from 'react'
import { SEO } from 'gatsby-theme-xdmorgan'
import { Header, Footer } from '../components'

import '../styles/skeletor/skeletor.css'
import '../styles/main.scss'

import styles from './layout.module.scss'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <SEO />
    <Header />
    <main id="content">{children}</main>
    <Footer />
  </div>
)

export default Layout
