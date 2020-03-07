import React from 'react'
import { Location } from '@reach/router'
import { SEO } from 'gatsby-theme-xdmorgan'
import { Header, Footer } from '../components'

import '../styles/main.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Location>
      {({ location }) => (
        <>
          <SEO />
          <Header
            textColor={
              /^\/styleguide/.test((location || {}).pathname)
                ? 'blue-ribbon'
                : 'white'
            }
          />
          <main id="content">{children}</main>
          <Footer />
        </>
      )}
    </Location>
  )
}
