import * as React from 'react'
import { SEO } from '../components/seo'
import './layout.scss'

interface Props {
  children: React.ReactNode
}

export function Layout(p: Props) {
  return (
    <>
      <SEO />
      {p.children}
    </>
  )
}

export default Layout
