import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const blogTemplate = ({ data }) => {
  console.log(data)
  const { content } = data.blog
  console.log("contnent", content)

  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown>{content.data.content}</ReactMarkdown>
            {/* {content.data.content} */}
          </article>
          <Link to="/blog" className="btn center-btn">
            back
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlog(slug: { eq: $slug }) {
      content {
        data {
          content
        }
      }
      title
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 900, height: 600)
          }
        }
      }
      date(formatString: "MMMM Do YYYY")
      category
    }
  }
`

export default blogTemplate
