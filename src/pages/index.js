import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Blogs from "../components/Blogs"
import Layout from "../components/Layout"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        id
        github
        description
        url
        title
        stack {
          id
          stack_name
        }
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(
                height: 600
                width: 900
                placeholder: BLURRED
                quality: 70
                blurredOptions: { width: 100 }
                transformOptions: { fit: COVER, cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
    allStrapiBlog(sort: { date: DESC }, limit: 3) {
      nodes {
        slug
        title
        desc_short
        date(formatString: "MMMM Do, YYYY")
        id
        category
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                width: 900
                height: 600
                transformOptions: { cropFocus: CENTER, fit: COVER }
              )
            }
          }
        }
      }
    }
  }
`

export default IndexPage
