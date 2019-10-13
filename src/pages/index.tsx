import * as React from 'react'
import { SEO } from '../components/seo'
import { Section } from '../components/section'
import { Skill } from '../components/skill'
import { Divider } from '../components/divider'
import { Projects } from '../components/projects'
// import { Link } from '../components/link'

export default function Page() {
  return (
    <>
      <SEO schema />
      <Section
        sidebar={() => (
          <div className="wysiwyg child-my-0">
            <h1>Dan M</h1>
            <h2 className="h3">Senior Engineer, Washington DC</h2>
          </div>
        )}
      >
        <div className="wysiwyg child-my-0">
          <p>
            Over my career, I've worked with Cartoon Network, Cvent, Designer
            Fund, EA Sports, Facebook, Huge, Instagram, Kia Motors, LinkedIn,
            NASA, Oculus, and Universal Studios to craft digital experiences for
            web, mobile, and emerging platforms.
          </p>
          <p>
            Currently, I work as an Associate Tech Lead at{' '}
            <a href="https://hugeinc.com">Huge</a> in Washington D.C.
            Previously, I have held roles as a Senior UI Developer at&nbsp;
            <a href="https://cvent.com/">Cvent</a>, Full-stack Developer
            at&nbsp;
            <a href="https://prpl.rs/">PRPL</a>, Application Developer at&nbsp;
            <a href="https://gifn.it/">Gifn</a> and UI Designer at&nbsp;
            <a href="https://xstudios.agency/">X Studios</a>.
          </p>
          <p>
            Since graduating university in 2010, I've built award-winning
            websites, scalable cloud services, accessible component libraries,
            machine-learning powered chatbots, native &amp; cross-platform
            mobile applications, and web-based SaaS applications.
          </p>
          <p>
            Once I've closed my computer for the day, my hobbies include
            watching and playing soccer, working up a sweat in cycling classes,
            watching food documentaries, and playing video games.
          </p>
        </div>
      </Section>

      <Divider maxWidth margin={false} />

      <Projects />

      <Divider maxWidth margin={false} />

      <Section
        sidebar={() => (
          <div className="wysiwyg child-my-0">
            <h2 className="h3">Expertise</h2>
          </div>
        )}
      >
        <div
          className="wysiwyg child-my-0"
          style={{ marginBottom: 'var(--space-5)' }}
        >
          <p>
            My design and engineering experience in corporate software and
            creative consulting environments has given me a unique ability to
            bridge the gaps between design direction, technical implementation,
            and business objectives.
          </p>
        </div>
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
            Atomic design, tokens, theming, Storybook, Lerna, documentation and
            component API design
          </Skill>
          <Skill title="Project Architecture">
            AWS, GCP, Docker, NPM, JAMStack, headless CMS, cloud functions, and
            CI/CD pipelines
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
          {/* <Skill title="Team Leadership">
            Architecture, mentorship, code reviews, presentations, diagrams, and
            pair programming
          </Skill> */}
        </Skill.Grid>
      </Section>

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
    </>
  )
}
