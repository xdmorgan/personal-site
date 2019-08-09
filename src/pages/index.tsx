import * as React from 'react'
import Link from '../components/link'
import { SEO } from '../components/seo'
import { Bio } from '../components/bio'

export default function Page() {
  return (
    <>
      <SEO
        schema
        title="Dan Morgan // Senior Engineer"
        description="Senior Engineer at Huge. Prev: Cvent, PRPL, Gifn, X Studios"
      />
      <Bio />

      {/* <Link to="//google.com">Go to Google</Link> */}
    </>
  )
}
