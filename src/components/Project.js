import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Project = ({
  projectDes,
  title,
  github,
  url,
  pictures,
  stackName,
  index,
}) => {
  return (
    <article className="project">
      <Carousel className="project-img">
        {pictures &&
          pictures.map((image, index) => (
            <Carousel.Item key={index}>
              <GatsbyImage
                image={getImage(image.gatsbyImageData)}
                className="project-img"
                alt={`${title} image number ${index + 1}`}
              />
            </Carousel.Item>
          ))}
      </Carousel>
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{projectDes.des}</p>
        <div className="project-stack">
          {stackName.map((item, index) => {
            return <span key={index}>{item}</span>
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
