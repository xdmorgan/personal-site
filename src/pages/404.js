import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <section className="Hero">
      <div className="Container">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Go home</Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
