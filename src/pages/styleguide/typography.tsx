import React from 'react'
import { Link } from 'gatsby-theme-xdmorgan'

export default function Page() {
  return (
    <div className="container">
      <div>
        <Link to="/styleguide">Styleguide</Link>
      </div>
      <div>
        <div className="h1--xxl">Article Title</div>
        <div className="h1--xl">Hero Title</div>
        <div className="h1">Heading 1</div>
        <div className="h2">Heading 2</div>
        <div className="h3">Heading 3</div>
        <div className="h4">Heading 4</div>
        <div className="h5">Heading 5</div>
        <div className="h6">Heading 6</div>
      </div>
      <div className="wysiwyg">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
      <div className="wysiwyg with-lede">
        <p>
          Lorem ipsum,{' '}
          <strong>dolor sit amet consectetur adipisicing elit.</strong>{' '}
          Voluptatibus nam,{' '}
          <Link to="#content">ex quae nihil, ducimus omnis sunt neque</Link>{' '}
          sint maxime quo atque quisquam eos quam porro, rerum nesciunt odio
          enim temporibus?
        </p>
        <p>
          <em>Lorem ipsum, dolor sit amet</em> consectetur adipisicing elit.
          Voluptatibus nam, ex quae nihil, <kbd>ducimus</kbd> omnis sunt neque
          sint maxime quo atque quisquam eos quam porro,{' '}
          <code>rerum nesciunt</code> odio enim temporibus?
        </p>
        <p>
          Lorem ipsum,{' '}
          <strong>dolor sit amet consectetur adipisicing elit.</strong>{' '}
          Voluptatibus nam,{' '}
          <Link to="#content">ex quae nihil, ducimus omnis sunt neque</Link>{' '}
          sint maxime quo atque quisquam eos quam porro, rerum nesciunt odio
          enim temporibus?
        </p>
        <small>
          <em>Lorem ipsum, dolor sit amet</em> consectetur adipisicing elit.
          Voluptatibus nam, ex quae nihil, <kbd>ducimus</kbd> omnis sunt neque
          sint maxime quo atque quisquam eos quam porro,{' '}
          <code>rerum nesciunt</code> odio enim temporibus?
        </small>
        <figure>
          <figcaption>
            Lorem ipsum,{' '}
            <strong>dolor sit amet consectetur adipisicing elit.</strong>{' '}
            Voluptatibus nam,{' '}
            <Link to="#content">ex quae nihil, ducimus omnis sunt neque</Link>{' '}
            sint maxime quo <em>Lorem ipsum, dolor sit amet</em> consectetur
            adipisicing elit. Voluptatibus nam, ex quae nihil,{' '}
            <kbd>ducimus</kbd> omnis sunt neque sint maxime quo atque quisquam
            eos quam porro, <code>rerum nesciunt</code> odio enim temporibus?
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
