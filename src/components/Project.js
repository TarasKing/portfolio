import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"

const Project = ({ description, title, github, url, images, stack, index }) => {
  return (
    <article className="project">
      <Carousel className="project-img">
        {images &&
          images.map((image, index) => (
            <Carousel.Item key={index}>
              <GatsbyImage
                image={getImage(
                  image.localFile.childImageSharp.gatsbyImageData
                )}
                className="project-img"
                alt={`${title} image number ${index + 1}`}
              />
            </Carousel.Item>
          ))}
      </Carousel>
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.stack_name}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
