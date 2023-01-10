import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

const Blog = ({ id, title, image, date, category, slug, desc_short }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <article className="blog-item">
        <GatsbyImage
          image={getImage(image.localFile.childImageSharp.gatsbyImageData)}
          className="blog-img"
          alt={title}
        />
        <div className="blog-card">
          <h4 className="blog-title">{title}</h4>
          <p>{desc_short}</p>
          <div className="blog-footer">
            <p className="blog-category ">{category}</p>
            <p className="blog-date">{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
