import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
// import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

import Layout from "../components/Layout"

const IndexPage = ({ data }) => {
  const {
    allContentfulProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Seo
        title="Home"
        description="Home page of Taras Ivanov's Portfolio web site"
      />
      <Hero />
      {/* <Services /> */}

      <Projects projects={projects} title="featured projects" showLink />
      <Jobs />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProjects(filter: { fetured: { eq: true } }) {
      nodes {
        id
        github
        url
        title
        stackName
        projectDes {
          des
        }
        pictures {
          gatsbyImageData(
            height: 600
            width: 900
            placeholder: BLURRED
            quality: 70
          )
        }
      }
    }
  }
`

export default IndexPage
