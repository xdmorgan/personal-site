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
              Over my career, I&rsquo;ve worked with Cartoon Network, Cvent, EA
              Sports, Facebook, Huge, LinkedIn, NASA, Oculus, and Wayfair to
              craft digital products for mobile, web, and emerging platforms.
            </p>
            <p className="small c-mystic">
              I&rsquo;ve gained experience with a broad spectrum of technologies
              and methodologies. In recent years, I&rsquo;ve focused on the
              following skills to specialize in UI architecture and front end
              engineering.
            </p>
          </div>
          <div className={cx(styles.grid__skills, styles.skills)}>
            <Skill title="Front End Development">
              HTML, JavaScript, React, Angular, Vue, CSS, Sass,
              styled-components, SVG, animation, and HTML email
            </Skill>
            <Skill title="Full Stack Development">
              Node, Python, WordPress, Shopify, GraphQL, REST, Firebase, and
              Relational &amp; Document DBs
            </Skill>
            <Skill title="Design Systems">
              Atomic design, Storybook, tokens, theming, and component API
              design
            </Skill>
            <Skill title="Project Architecture">
              AWS, GCP, Docker, NPM, JAMStack, headless CMS, serverless lambda
              functions, and CI/CD pipelines
            </Skill>
            <Skill title="Testing &amp; Tooling">
              Webpack, Jest, Prettier, ESLint, Flow, TypeScript, Babel, Parcel,
              Gulp, and Cypress
            </Skill>
            <Skill title="Mobile &amp; Emerging Tech">
              Swift, React Native, Xamarin (C#), PWAs, Actions on Google, and
              Dialogflow
            </Skill>
            <Skill title="Accessibility &amp; i18n">
              WCAG 2.1 &amp; Section 508 guidelines, ARIA accessible
              applications, axe, JAWS, Wave, and Accessibility Insights for Web
            </Skill>
            <Skill title="Project Management">
              Git, GitHub, BitBucket, JIRA, Trello, Asana, kanban &amp; scrum
              agile processes
            </Skill>
            <Skill title="Design Tools &amp; Hand-off">
              Sketch, Figma, Photoshop, Illustrator, Zeplin, Invision, asset
              optimization, Abstract, and Framer X
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
