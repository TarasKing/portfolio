import React from "react"
import { FaAngleDoubleRight } from "react-icons/fa"

const ExperienceDescription = ({
  jobs,
  education,
  volunteer,
  valueJobs,
  valueEducation,
  valueVolunteer,
  category,
}) => {
  const { company, position, dateInterval, desc, location } = jobs[valueJobs]
  const { title, programm, duration, cgpa, address } = education[valueEducation]
  const { eventTitle, eventPosition, eventField, eventDuration } = volunteer[
    valueVolunteer
  ]

  if (category === "experience") {
    return (
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
    )
  } else if (category === "education") {
    return (
      <article className="job-info">
        <h3>{programm}</h3>
        <h4>{title}</h4>
        <p className="job-location">{address}</p>
        <p className="job-date">{duration}</p>
        <p className="job-date">{cgpa}</p>
      </article>
    )
  } else {
    return (
      <article className="job-info">
        <h3>{eventPosition}</h3>
        <h4>{eventTitle}</h4>
        <p className="job-location">{eventField}</p>
        <p className="job-date">{eventDuration}</p>
      </article>
    )
  }
}

export default ExperienceDescription
