import React from 'react'
import { SEO } from './seo'
import './site.scss'

export function Layout({ children }) {
  return (
    <>
      <SEO />
      {children}
    </>
  )
}

export default Layout
