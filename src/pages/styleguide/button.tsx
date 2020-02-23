import React from 'react'
import { Link } from 'gatsby-theme-xdmorgan'
import { Button } from '../../components'

export default function Page() {
  return (
    <div className="container py-10x md:pt-12x">
      <div>
        <Link to="/styleguide">Styleguide</Link>
      </div>
      <div className="py-2x md:py-4x">
        <Button>Basic</Button>
      </div>
      <div className="py-2x md:py-4x">
        <Button fill>Fill</Button>
      </div>
      <div className="py-2x md:py-4x">
        <Button onClick={console.log}>onClick</Button>
      </div>
      <div className="py-2x md:py-4x">
        <Button onClick={console.log} disabled>
          Disabled
        </Button>
      </div>
      <div className="py-2x md:py-4x">
        <Button to="/styleguide">Link (to)</Button>
      </div>
      <div className="py-2x md:py-4x">
        <Button href="/styleguide" fill>
          Link (href)
        </Button>
      </div>
    </div>
  )
}
