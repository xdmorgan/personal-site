import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="Hero">
      <div className="Container">
        <h1>
          <span role="img" aria-label="Man using laptop">
            👨‍💻
          </span>
        </h1>
        <h2>Hi, I'm Dan.</h2>
        <h3>
          I'm a Senior Web Engineer at <a href="//hugeinc.com">Huge</a> in
          Washington D.C.
        </h3>
        <p>
          What does that mean? Well, I have experience writing, testing,
          deploying (and debugging) JavaScript, Python, and Mobile applications.
        </p>
        <p>
          Prior to Huge, I worked as a UI Developer at{' '}
          <a href="//cvent.com">Cvent</a>, Full-stack Developer at{' '}
          <a href="//prpl.rs">PRPL</a>, Application Developer at{' '}
          <a href="//gifn.it">Gifn</a>, and UI Designer at{' '}
          <a href="//xstudios.agency">X Studios</a>.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
