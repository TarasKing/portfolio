import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  query {
    allContentfulJobs {
      nodes {
        jobOrder
        company
        dateInterval
        position
        location
        desc
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulJobs: { nodes: jobs },
  } = data

  const [value, setValue] = useState(0)
  const { company, position, dateInterval, desc, location } = jobs[value]

  let jobsSorted = jobs.sort((a, b) => (a.jobOrder < b.jobOrder ? 1 : -1))

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobsSorted.map((job, index) => {
            return (
              <button
                key={job.jobOrder}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-location">{location}</p>
          <p className="job-date">{dateInterval}</p>
          {desc.map((item, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
