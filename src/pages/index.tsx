import * as React from 'react'
// import { Link } from 'gatsby-theme-xdmorgan'
import { Divider } from '../components/divider'
import { Projects } from '../components/projects'

import { AboutSection, ContactSection } from '../components'

export default function Page() {
  return (
    <>
      <AboutSection />
      <div className="container">
        <div className="my-8x md:my-8x lg:my-10x">
          <Projects />
        </div>

        <Divider maxWidth margin={false} />
      </div>

      {/* <Divider maxWidth margin={false} />

      <Section
        sidebar={() => (
          <div className="wysiwyg child-my-0">
            <h2 className="h3">Articles</h2>
          </div>
        )}
      >
        <div className="child-my-0 wysiwyg">
          <h3 className="h2">
            <Link to="/blog/mailchimp-api-interests">
              How to Find and Use Interest IDs with the Mailchimp API
            </Link>
          </h3>
          <p className="p--small">1 minute read &bull; PHP, Mailchimp, APIs</p>
        </div>
      </Section> */}
      <ContactSection />
    </>
  )
}
