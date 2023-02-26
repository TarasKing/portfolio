import React from "react"
import Title from "./Title"

export const Category = ({ category, title }) => {
  return (
    <div className="job-section">
      {title === category ? (
        <Title title={title} />
      ) : (
        <h2 className="section-title">{title}</h2>
      )}
    </div>
  )
}

export default Category
