import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
  data: {
    allStrapiBlog: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="all articles" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiBlog {
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

export default Blog
