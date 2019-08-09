import React from 'react'
import styles from './bio.module.css'
import cx from 'classnames'

export function Bio() {
  return (
    <section className={cx(styles.section, 'wysiwyg')}>
      <h1>Dan Morgan</h1>
      <hr />
      <p>
        I help companies like Cartoon Network, Cvent, EA Sports, Facebook, Huge,
        Instagram, Kia, LinkedIn, NASA, Oculus, Parse, and Universal Studios
        craft scalable and accessible user interfaces for web, mobile, and
        emerging platforms.
      </p>
      <p>
        Over the last 9 years, I've worked with companies large and small to
        implement multi-platform product design systems, extensible component
        architectures, award-winning marketing websites, and native mobile
        applications.
      </p>
      <p>
        Currently, I employed as a Senior Web Engineer at{' '}
        <a href="https://hugeinc.com">Huge</a> in Washington D.C. Previously,
        Senior UI Developer at&nbsp;
        <a href="https://cvent.com/">Cvent</a>, Full-stack Developer at&nbsp;
        <a href="https://prpl.rs/">PRPL</a>, Application Developer at&nbsp;
        <a href="https://gifn.it/">Gifn</a> and UI Designer at&nbsp;
        <a href="https://xstudios.agency/">X Studios</a>.
      </p>
      <p>
        My professional experience working as both a designer and a developer,
        in both corporate software development and creative consulting settings
        gives me a uniquely holistic outlook which helps me bridge the gaps
        between design direction, technical implementation, and business
        objectives.
      </p>
      <hr />
      <div className={styles.skills}>
        <Skill title="Client-Side Development">
          HTML, CSS, Sass, JavaScript, React, CSS-in-JS, Angular, Vue, and
          emails
        </Skill>
        <Skill title="Server-Side Development">
          Node, Python, JAMstack, Serverless, PHP, headless CMS, and API design
        </Skill>
        <Skill title="Mobile App Development">
          React Native, Swift, Xamarin (C#), PhoneGap, and PWA’s
        </Skill>
        <Skill title="Leadership &amp; Management">
          Code reviews, Mentorship, Pair programming
        </Skill>
        <Skill title="Design Tools &amp; Handoff">
          Sketch, Figma, Photoshop, Illustrator, Zeplin, Invision, and Framer X
        </Skill>
        <Skill title="Accessibility Standards">
          WCAG 2.1 guidelines, Section 508 compliance, ARIA, and screenreaders
        </Skill>
        <Skill title="Testing &amp; Tooling">
          Webpack, Jest, Prettier, ESLint, Flow, TypeScript, Babel, aXe, and
          Cypress
        </Skill>
        <Skill title="Project Management">
          Git, SVN, GitHub, BitBucket, JIRA, with agile and waterfall project
          experience
        </Skill>
        <Skill title="Deployments &amp; Architecture">
          AWS, NPM, GCP, Netlify, Docker, Cloudflare, and CI/CD pipelines
        </Skill>
      </div>
      <hr />
      <ul className={styles.profiles}>
        <li>
          <a
            className="button button--fill"
            href="https://linkedin.com/in/xdmorgan"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a className="button button--fill" href="https://github.com/xdmorgan">
            Github
          </a>
        </li>
        <li>
          <a
            className="button button--fill"
            href="https://twitter.com/xdanmorgan"
          >
            Twitter
          </a>
        </li>
      </ul>
    </section>
  )
}

const Skill = ({ title, children }) => (
  <div className={cx(styles.skill, 'child-my-0')}>
    <h3 className="h5">{title}</h3>
    <p className="p--small">{children}</p>
  </div>
)

export default Bio
