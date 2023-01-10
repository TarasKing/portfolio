import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Seo from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  console.log(nodes[0])
  const { title, stack, image, info_object } = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            image={getImage(
              image.localFile.childrenImageSharp[0].gatsbyImageData
            )}
            alt={title}
            className="about-img"
          />
          <article className="about-text">
            <Title title={title} />
            <div className="about-info">
              <p>{info_object.first}</p>
              <p>{info_object.second}</p>
              <p>{info_object.third}</p>
            </div>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.stack_name}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: allStrapiAbout {
      nodes {
        title
        stack {
          stack_name
          id
        }
        image {
          localFile {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        info_object {
          first
          second
          third
        }
      }
    }
  }
`

export default About
