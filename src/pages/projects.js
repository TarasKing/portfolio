import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const ProjectsPage = ({
  data: {
    allContentfulProjects: { nodes: projects },
  },
}) => {
  console.log(projects)
  return (
    <Layout>
      <Seo
        title="Projects"
        description="This is projects page. Here you can find all my projects"
      />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProjects {
      nodes {
        id
        github
        url
        title
        stackName
        projectDescription
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

export default ProjectsPage
