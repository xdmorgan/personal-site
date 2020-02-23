import React from 'react'
import { Link } from 'gatsby-theme-xdmorgan'

export default function Page() {
  return (
    <div className="container py-10x md:pt-12x">
      <ul>
        <li>
          <Link to="/styleguide/typography">Typograhy</Link>
        </li>
        <li>
          <Link to="/styleguide/button">Button</Link>
        </li>
      </ul>
    </div>
  )
}
