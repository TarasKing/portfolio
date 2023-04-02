import React, { useState } from "react"
import Category from "./Category"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import SideButtonExperience from "./SideButtonExperience"
import ExperienceDescription from "./ExperienceDescription"

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
    allContentfulEducation {
      nodes {
        title
        programm
        duration
        cgpa
        address
      }
    }
    allContentfulVolunteer {
      nodes {
        eventTitle
        eventPosition
        eventField
        eventDuration
      }
    }
  }
`

const Experience = () => {
  const data = useStaticQuery(query)

  const {
    allContentfulJobs: { nodes: jobs },
    allContentfulEducation: { nodes: education },
    allContentfulVolunteer: { nodes: volunteer },
  } = data

  const [valueJobs, setValueJobs] = useState(0)
  const [valueEducation, setValueEducation] = useState(0)
  const [valueVolunteer, setValueVolunteer] = useState(0)
  const [category, setCategory] = useState("experience")

  let categoryHandler = text => {
    setCategory(text)
  }

  let jobsSorted = jobs.sort((a, b) => (a.jobOrder < b.jobOrder ? 1 : -1))

  return (
    <section className="section jobs">
      {/* here is 3 types of headers: experience, education and volunteering */}
      <div className="category-education-volunteer-experience">
        <button
          className="category-job-btn"
          onClick={() => categoryHandler("experience")}
        >
          <Category title="experience" category={category} />
        </button>
        <button
          className="category-job-btn"
          onClick={() => categoryHandler("education")}
        >
          <Category title="education" category={category} />
        </button>
        <button
          className="category-job-btn"
          onClick={() => categoryHandler("volunteering")}
        >
          <Category title="volunteering" category={category} />
        </button>
      </div>
      {/* sidebar buttons */}
      <div className="jobs-center">
        <SideButtonExperience
          category={category}
          jobsSorted={jobsSorted}
          education={education}
          volunteer={volunteer}
          valueJobs={valueJobs}
          valueEducation={valueEducation}
          valueVolunteer={valueVolunteer}
          setValueJobs={setValueJobs}
          setValueEducation={setValueEducation}
          setValueVolunteer={setValueVolunteer}
        />
        {/* job info */}
        <ExperienceDescription
          category={category}
          jobs={jobs}
          education={education}
          volunteer={volunteer}
          valueJobs={valueJobs}
          valueEducation={valueEducation}
          valueVolunteer={valueVolunteer}
        />
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Experience
