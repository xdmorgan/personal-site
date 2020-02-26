import React from 'react'
import { Button } from '.'

export function ContactSection() {
  return (
    <section className="bg-midnight-blue c-white">
      <div className="container align-c child-my-0 py-8x md:pt-10x lg:pt-12x lg:pb-10x">
        <h2 className="h1 my-0">Want to get in touch?</h2>
        <p
          className="mt-2x mb-4x md:mt-3x para"
          style={{ maxWidth: 660, marginLeft: 'auto', marginRight: 'auto' }}
        >
          If you’re looking to collaborate on your next project or just want to
          say hello, feel free to drop me a line anytime. 🤙
        </p>
        <Button href="mailto:hello@danny.codes">Send me a message</Button>
      </div>
    </section>
  )
}
