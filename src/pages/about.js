import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Seo from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = ({ data }) => {
  const {
    allContentfulAbout: { nodes: about },
  } = data

  const { title, stack, image, info } = about[0]
  return (
    <Layout>
      <Seo title="About" description="About web developer" />
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            image={getImage(image.gatsbyImageData)}
            alt={title}
            className="about-img"
          />
          <article className="about-text">
            <Title title={title} />
            <div className="about-info">
              <p>{info.first}</p>
              <p>{info.second}</p>
              <p>{info.third}</p>
            </div>
            <div className="about-stack">
              {stack.map((item, index) => {
                return <span key={index}>{item}</span>
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
    allContentfulAbout {
      nodes {
        title
        stack
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
        info {
          first
          second
          third
        }
      }
    }
  }
`

export default About
