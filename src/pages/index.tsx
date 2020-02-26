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
  const [featuredPost, ...recentPosts] = posts // real posts
  return (
    <>
      <AboutSection />
      <FeaturedProjectSection
        imageSrc={featuredProjectImage.childImageSharp}
        imageAlt="Designer fund employees"
        title="Design for Business Impact"
        description="A triumvirate of Gatsby, Contentful, and Netlify power this Designer Fund microsite. The site was featured on Awwwards and integrates with the Mailchimp API using serverless Netlify Functions."
        url="https://designerfund.com/business-impact"
      />
      <ProjectsAndArticlesSection
        featuredPostImageSrc={
          featuredPost.frontmatter.image.thumbnail.childImageSharp
        }
        featuredPostImageAlt={featuredPost.frontmatter.image.alt}
        featuredPostTitle={featuredPost.frontmatter.title}
        featuredPostURL={postSlugToRoute(featuredPost.fields.slug)}
        featuredPostExcerpt={featuredPost.excerpt}
        recentPosts={[featuredPost, featuredPost, featuredPost].map(
          recentPost => ({
            title: recentPost.frontmatter.title,
            url: postSlugToRoute(recentPost.fields.slug),
          })
        )}
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
    posts: allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        ...PostMetaFields
        ...PostThumbnailImage
      }
    }
  }
`
