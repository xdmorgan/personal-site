import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="Hero">
      <div className="Container">
        <h1>
          <span role="img" aria-label="Hello world">
            👋 🌎
          </span>
        </h1>
        <p>
          I'm Dan. I build UIs in Washington, DC. Currently, UI Developer at{' '}
          <a href="//cvent.com">Cvent</a>. Previously, Full-stack at{' '}
          <a href="//prpl.rs">PRPL</a>, Application developer at{' '}
          <a href="//gifn.it">Gifn</a>, and UI Designer at{' '}
          <a href="//xstudios.agency">X Studios</a>.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
