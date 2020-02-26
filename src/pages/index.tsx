import * as React from 'react'
import { graphql } from 'gatsby'

import {
  AboutSection,
  ContactSection,
  FeaturedProjectSection,
  ProjectsAndArticlesSection,
} from '../components'

export default function Page({ data }: any) {
  console.log(data)
  const {
    posts: { nodes: posts },
    featuredPostImage,
  } = data
  const [featuredPost, ...recentPosts] = posts
  return (
    <>
      <AboutSection />
      <FeaturedProjectSection />
      <ProjectsAndArticlesSection
        featuredPostImage={featuredPost.frontmatter.thumbnail.childImageSharp}
        featuredPostTitle={featuredPost.frontmatter.title}
        featuredPostURL={`/${featuredPost.fields.slug}`}
        featuredPostExcerpt={featuredPost.excerpt}
        recentPosts={recentPosts.map(recentPost => ({
          title: recentPost.frontmatter.title,
          url: `/${recentPost.fields.slug}`,
        }))}
      />
      <ContactSection />
    </>
  )
}

export const query = graphql`
  query {
    featuredPostImage: file(relativePath: { eq: "featured-dfbi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
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
