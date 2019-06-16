import * as React from 'react'
// import { graphql } from 'gatsby'
import CanvasBackground from '../components/canvas'

interface Props {}

export default function Page(p: Props) {
  return (
    <section className="Hero">
      <CanvasBackground id="canvas" />
      <div className="Container">
        <h1>Dan Morgan</h1>
        <p>
          I'm experienced at building, testing, deploying and debugging Web and
          Mobile applications.
        </p>
      </div>
    </section>
  )
}

// export const query = graphql`
//   query IndexPageQuery {
//     site {
//       ...SiteMetaFields
//     }
//     prismicHome {
//       ...PrismicHomeFields
//     }
//   }
// `
