import * as React from 'react'
// import Link from '../components/link'
import { SEO } from '../components/seo'
import { Section } from '../components/section'
import { Skill } from '../components/skill'
import { Footer } from '../components/footer'
import Link from '../components/link'

export default function Page() {
  return (
    <>
      <SEO
        schema
        title="Dan Morgan // Senior Engineer"
        description="Senior Engineer at Huge. Prev: Cvent, PRPL, Gifn, X Studios"
      />

      <Section
        sidebar={() => (
          <div className="wysiwyg child-my-0">
            <h1>Dan Morgan</h1>
            <h2 className="h3">Senior Front End Engineer</h2>
          </div>
        )}
      >
        <div className="wysiwyg child-my-0">
          <p>
            I help companies like Cartoon Network, Cvent, EA Sports, Facebook,
            Huge, Instagram, Kia, LinkedIn, NASA, Oculus, Parse, and Universal
            Studios craft scalable and accessible user interfaces for web,
            mobile, and emerging platforms.
          </p>
          <p>
            Over the last 9 years, I've worked with companies large and small to
            implement multi-platform product design systems, extensible
            component architectures, award-winning marketing websites, and
            native mobile applications.
          </p>
          <p>
            Currently, I'm a Senior Web Engineer at{' '}
            <a href="https://hugeinc.com">Huge</a> in Washington D.C.
            Previously, Senior UI Developer at&nbsp;
            <a href="https://cvent.com/">Cvent</a>, Full-stack Developer
            at&nbsp;
            <a href="https://prpl.rs/">PRPL</a>, Application Developer at&nbsp;
            <a href="https://gifn.it/">Gifn</a> and UI Designer at&nbsp;
            <a href="https://xstudios.agency/">X Studios</a>.
          </p>
        </div>
      </Section>
      <Section
        sidebar={() => (
          <div className="wysiwyg child-my-0">
            <h2 className="h3">Skills &amp; Experience</h2>
          </div>
        )}
      >
        <div
          className="wysiwyg child-my-0"
          style={{ marginBottom: 'var(--space-5)' }}
        >
          <p>
            My experience working as both designer and developer in corporate
            software development and creative consulting environments has given
            me a uniquely holistic outlook which helps me bridge the gap between
            design direction, technical implementation, and business objectives.
            Some of my areas of expertise are as follows:
          </p>
        </div>
        <Skill.Grid>
          <Skill title="Client-Side Development">
            HTML, CSS, Sass, JavaScript, React, CSS-in-JS, Angular, Vue, and
            emails
          </Skill>
          <Skill title="Server-Side Development">
            Node, Python, JAMstack, Serverless, PHP, headless CMS, and API
            design
          </Skill>
          <Skill title="Mobile App Development">
            React Native, Swift, Xamarin (C#), PhoneGap, and PWA’s
          </Skill>
          <Skill title="Leadership &amp; Management">
            Code reviews, Mentorship, and Pair programming
          </Skill>
          <Skill title="Design Tools &amp; Handoff">
            Sketch, Figma, Photoshop, Illustrator, Zeplin, Invision, and Framer
            X
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
        </Skill.Grid>
      </Section>

      <Section
        sidebar={() => (
          <div className="wysiwyg child-my-0">
            <h2 className="h3">Articles</h2>
          </div>
        )}
      >
        <div
          className="child-my-0 wysiwyg"
          style={{ marginBottom: 'var(--space-5)' }}
        >
          <h3 className="h2">
            <Link to="/">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </h3>
          <p className="p--small">Reading time: 2 minutes</p>
        </div>

        <div className="child-my-0 wysiwyg">
          <h3 className="h2">
            <Link to="/">
              Amet sunt delectus veritatis. Eaque, rerum a veritatis vero quas
              quaerat ad.
            </Link>
          </h3>
          <p className="p--small">Reading time: 15 minutes</p>
        </div>
      </Section>

      <Footer />
    </>
  )
}
