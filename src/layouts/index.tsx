import React from 'react'
import { SEO } from 'gatsby-theme-xdmorgan'
import { Header, Footer } from '../components'

import '../styles/skeletor/skeletor.css'
import '../styles/main.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SEO />
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </>
  )
}
