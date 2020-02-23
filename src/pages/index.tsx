import * as React from 'react'
// import { Link } from 'gatsby-theme-xdmorgan'
import { Section } from '../components/section'
import { Skill } from '../components/skill'
import { Divider } from '../components/divider'
import { Projects } from '../components/projects'

import { ContactSection } from '../components'

export default function Page() {
  return (
    <>
      <div className="container py-10x md:pt-16x md:pb-12x">
        <div className="child-my-0 py-8x md:py-10x xl: lg:py-12x">
          <h1
            className="h1--xl align-c"
            style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Dan is a Front End Engineer{' '}
            <span className="fw-normal">
              working on design systems at Wayfair
            </span>{' '}
            in Washington D.C.
          </h1>
        </div>

        <Section
          sidebar={() => (
            <div className="child-my-0 md:pr-4x">
              <h2 className="h3">Skills &amp; Expertise</h2>
              <p className="small">
                Throughout his career, Dan has worked with companies including:
                Cartoon Network, EA Sports, Facebook, Huge, LinkedIn, NASA,
                Oculus, and Wayfair to craft digital products for web, mobile,
                and emerging platforms.
              </p>
            </div>
          )}
        >
          <Skill.Grid>
            <Skill title="Front-End Development">
              HTML, JavaScript, React, redux, Angular, Vue, GraphQL, REST, CSS,
              Sass, CSS-in-JS, and email
            </Skill>
            <Skill title="Full-Stack Development">
              Node, Python, PHP, WordPress, GraphQL, REST, Firebase, and
              Relational &amp; Document DBs
            </Skill>
            <Skill title="Design Systems">
              Atomic design, tokens, theming, Storybook, Lerna, documentation
              and component API design
            </Skill>
            <Skill title="Project Architecture">
              AWS, GCP, Docker, NPM, JAMStack, headless CMS, cloud functions,
              and CI/CD pipelines
            </Skill>
            <Skill title="Testing &amp; Tooling">
              Webpack, Jest, Prettier, ESLint, Flow, TypeScript, Babel, aXe,
              Parcel, Gulp, and Cypress
            </Skill>
            <Skill title="Mobile &amp; Emerging Tech">
              Swift, React Native, Xamarin (C#), PWAs, Actions on Google, and
              Dialogflow
            </Skill>
            <Skill title="Accessibility &amp; i18n">
              WCAG 2.1 guidelines, Section 508, ARIA, RTL, screenreaders, and
              internationalization
            </Skill>
            <Skill title="Project Management">
              Git, GitHub, BitBucket, JIRA, Trello, Asana, kanban &amp; scrum
              agile processes
            </Skill>
            <Skill title="Design Tools &amp; Hand-off">
              Sketch, Figma, Photoshop, Illustrator, Zeplin, Invision, asset
              optimization, and Framer X
            </Skill>
          </Skill.Grid>
        </Section>

        <div className="mt-8x md:mt-10x lg:mt-12x">
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
