import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiProject {
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
  }
`

export default ProjectsPage
