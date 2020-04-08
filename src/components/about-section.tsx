import React from 'react'
import cx from 'classnames'
import styles from './about-section.module.scss'

export function AboutSection() {
  return (
    <section className="bg-blue-gradient c-white py-10x lg:py-12x xl:py-16x">
      <div className="container">
        <div className="child-my-0 py-10x md:py-12x lg:py-16x sm:px-4x">
          <h1
            className="h1--xl align-c"
            style={{
              maxWidth: 1000,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Front End Engineer{' '}
            <span className="fw-normal c-mystic">
              working on design systems
            </span>{' '}
            in Washington&nbsp;D.C.
          </h1>
        </div>
      </div>
      <div id="about" className="container md:py-8x">
        <div className={styles.grid}>
          <div
            className={cx(
              styles.grid__bio,
              'child-my-0 mb-2x lg:mb-0 lg:pr-8x'
            )}
          >
            <h2 className="h3 mb-2x">Skills &amp; Expertise</h2>
            <p className="small c-mystic">
              Over my career, I&rsquo;ve worked with companies including Cartoon
              Network, Cvent, EA Sports, Facebook, Huge, LinkedIn, NASA, Oculus,
              and Wayfair to craft digital products for mobile, web, and
              emerging platforms.
            </p>
            <p className="small c-mystic">
              In roles varying from visual designer to tech lead, I&rsquo;ve
              developed a holistic understanding of the software development
              lifecycle. In recent years, I&rsquo;ve focused on the following
              areas to specialize in UI architecture and front end engineering.
            </p>
          </div>
          <div className={cx(styles.grid__skills, styles.skills)}>
            <Skill title="Front End Development">
              HTML, JavaScript, React, Next.js, Gatsby, Vue, CSS, Sass,
              styled-components, SVG, animation, and HTML email
            </Skill>
            <Skill title="Design Systems">
              Atomic design, design tokens, application theming, library
              versioning, component API design, and system evangelism
            </Skill>
            <Skill title="Testing &amp; Tooling">
              Webpack, Jest, Cypress, Prettier, ESLint, TypeScript, Storybook,
              Babel, Parcel, Gulp, and custom tooling / CLIs
            </Skill>
            <Skill title="Full Stack Development">
              Node, Python, WordPress, Shopify, GraphQL, REST, Firebase,
              Relational and Document DB architectures
            </Skill>
            <Skill title="Mobile &amp; Emerging Tech">
              Swift, React Native, Progressive Web Apps, Actions on Google,
              Chatbots, Dialogflow, and Xamarin (C#)
            </Skill>
            <Skill title="Architecture & Ops">
              AWS, GCP, Docker, NPM, JAMStack, headless CMS, serverless/lambda
              functions, and CI/CD pipelines
            </Skill>
            <Skill title="Accessibility &amp; i18n">
              WCAG 2.1 &amp; Section 508 guidelines, ARIA accessible
              applications, axe testing, JAWS, Wave, and Accessibility Insights
              for Web
            </Skill>
            <Skill title="Design Tools &amp; Hand-off">
              Sketch, Figma, Photoshop, Illustrator, Zeplin, Invision, asset
              optimization, Abstract, and Framer X
            </Skill>
            <Skill title="Project Management">
              Git, GitHub, BitBucket, JIRA, Trello, Asana, kanban and scrum
              agile methodologies
            </Skill>
            <Skill title="Team Leadership" className="d-block md:d-none">
              Architecture, mentorship, code reviews, presentations, data flow
              diagrams, and pair programming
            </Skill>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Skill({
  title,
  children,
  className,
  ...props
}: {
  title: string
  children: React.ReactNode
  className?: string
  [props: string]: any
}) {
  return (
    <div
      {...props}
      className={cx(styles.grid__skill, 'child-my-0 lg:mb-2x', className)}
    >
      <h3 className="h5 mb-1x md:mb-2x">{title}</h3>
      <p className="c-mystic m-0">{children}</p>
    </div>
  )
}
