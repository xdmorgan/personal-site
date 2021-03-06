import * as React from 'react'
import { graphql } from 'gatsby'

import {
  AboutSection,
  ContactSection,
  FeaturedProjectSection,
  ProjectsAndArticlesSection,
} from '../components'

const postSlugToRoute = s => `/blog/${s}`

export default function Page({ data }: any) {
  const {
    posts: { nodes: posts },
    featuredProjectImage,
  } = data
  const [featuredPost, ...recentPosts] = posts
  return (
    <>
      <AboutSection />
      <FeaturedProjectSection
        imageSrc={featuredProjectImage.childImageSharp}
        imageAlt="Designer fund employees"
        title="Design for Business Impact"
        description="Gatsby, Contentful, and Netlify power this Designer Fund microsite featured on Awwwards and Communication Arts. Authentication integrates with Mailchimp using custom serverless Netlify Functions."
        url="https://designerfund.com/business-impact"
      />
      <ProjectsAndArticlesSection
        featuredPostImageSrc={
          featuredPost.frontmatter.image.thumbnail.childImageSharp
        }
        featuredPostImageAlt={featuredPost.frontmatter.image.alt}
        featuredPostTitle={featuredPost.frontmatter.title}
        featuredPostURL={postSlugToRoute(featuredPost.fields.slug)}
        featuredPostExcerpt={featuredPost.frontmatter.lede}
        recentPosts={recentPosts.map(recentPost => ({
          title: recentPost.frontmatter.title,
          url: postSlugToRoute(recentPost.fields.slug),
        }))}
      />
      <ContactSection />
    </>
  )
}

export const query = graphql`
  query {
    featuredProjectImage: file(relativePath: { eq: "featured-dfbi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 50) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    posts: allMdx(
      limit: 4
      filter: { frontmatter: { status: { ne: "draft" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      nodes {
        ...PostMetaFields
        ...PostThumbnailImage
      }
    }
  }
`
